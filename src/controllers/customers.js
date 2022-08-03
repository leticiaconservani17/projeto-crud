const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

const DefaultTtitle = 'Cadastro de Clientes'

function index(req, res){
    res.render('register', {
        title: DefaultTtitle
    } )
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordC = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordC,
    })

    register.save()
    res.render('register', {
        title: DefaultTtitle,
        message: 'Cadastro realizado com sucesso!'
      })
}

async function list(req, res){

    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Listagem de usuários',
        users,
    })
}

async function formEdit(req, res){

    const {id} = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar usuário',
        user,
    })
}

async function edit(req,res){
    const {
        name,
        age,
        email,
        password,
    } = req.body
    const {id} = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit',{
        title: 'Editar usuario',
        user,
        message: 'usuario alterado',
    })
}

async function remove(req, res) {
    
    const { id } = req.params
  
    const remove = await CustomersModel.deleteOne({ _id: id })
    if (remove){
        res.redirect('/list')
    }

}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
    remove
}