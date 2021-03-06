const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const app = express();

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        res.redirect('/menu');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.post('/api/createreservation', (req, res) => {
        console.log(req.body)
        User.findById(req.user._id, function (err, user) {
            user.reservations.push(req.body);
            user.save();
        })
        res.end();
    });

    app.post('/api/removereservation', (req, res) => {
        console.log(req.body)
        User.findById(req.user._id, function (err, user) {
            user.reservations = user.reservations.filter(item => item.uuid !== req.body.uuid);
            user.save();
        })
        res.end();
    })
};