const router = require('express').Router()
const Votes = require('./voteModel')
const db = require('../database/dbConfig')

router.get('/', (req, res) => {
    Votes.findAll()
        .then(response => {
            // console.log(response)
            let count = response.length
            res.status(200).json({ votes: count })
        })
        .catch(err => {
            res.status(500).json({ message: "that didn't work" })
        })
})

// router.get("/", (req, res) => {
//     db("votes")
//         .then(vote => {
//             res.json(vote);
//         })
//         .catch(err => {
//             res.status(500).json({ message: "Failed to retrieve Votes" });
//         });
// });

router.post('/', (req, res) => {
    Votes.add(1)
        .then(vote => {
            // console.log(vote)
            Votes.findAll()
                .then(response => {
                    let count = response[0].click_yes
                    console.log(count)
                    res.status(201).json({ votes: count })
                })
                .catch(err => {
                    res.status(500).json({ error: "vote could not be found" })
                })
            // res.status(200).json(vote);
        })
        .catch(err => {
            res.status(500).json({ error: "vote not made" })
        })
})

// router.post('/', (req, res) => {
//     Votes.add(1)
//         .then(vote => {
//             // console.log(vote)
//             Votes.findAll()
//                 .then(response => {
//                     let count = response.length
//                     res.status(201).json({ votes: count })
//                 })
//                 .catch(err => {
//                     res.status(500).json({ error: "vote could not be found" })
//                 })

//             // res.status(200).json(vote);
//         })
//         .catch(err => {
//             res.status(500).json({ error: "vote not made" })
//         })
// })

module.exports = router