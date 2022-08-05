const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// all authors route
router.get('/', (req, res) => {
  res.render('authors/index')
})

// new author route
router.get('/new', (req, res) => {
  res.render('authors/new', {author: new Author() })
})

// create authors route
router.post('/', (req, res) => {
  const author = new Author({
    name:req.body.name,
  })
  author.save((err, newAuthor) => {
    if (err) {
      res.render('author/new', {
        author:author,
        errorMessage: 'Error creating Author'
      })
    } else {
      res.redirect(`authors`)
    }
  })
})

module.exports = router