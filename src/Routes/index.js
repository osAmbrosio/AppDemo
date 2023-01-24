import { Router } from "express"


const router = Router()

router.get('/', (req,res) => res.render('index', { title : 'First Web with Node.js'}))   //Send a file with name 'index'

router.get('/about', (req,res) => res.render('about.ejs', {title: 'About Me'}))   //localhost:3000/about

router.get('/contact', (req,res) => res.render('contact.ejs', {title: 'Contact Page'}))   //localhost:3000/contact

export default router