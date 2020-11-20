const {Router} = require('express')
const router = Router()

router.post('/form', (req, res) => {
    try {
        console.log('Body', req.body)

        const form = req.body
        let url = '?'

        for (let key in form) {
            // if (form[key].length > 0) {
            url += key + '=' + form[key] + '&'
            // }
        }


        res.status(201).json({message: 'Data  received', data: form, url})

    } catch (e) {
        res.status(500).json({message: 'Something wrong, try again'})
    }
})

module.exports = router