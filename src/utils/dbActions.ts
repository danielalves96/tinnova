import { registerData } from '@types'
import axios from 'axios'

export const getFirstList = async () => {
  try {
    const dbStart = await axios.get('https://private-9d65b3-tinnova.apiary-mock.com/users')

    await localStorage.setItem('db', JSON.stringify(dbStart.data));

    const db: registerData = await JSON.parse(localStorage.getItem('db') || '[]')

    return db
  }
  catch (err) {
    console.log("eee", err)
  }
}

export const getList = () => {
  try {
    const db: registerData = JSON.parse(localStorage.getItem('db') || '[]')

    return db
  }
  catch (err) {
    console.log("eee", err)
  }
}

export const postInDb = (data: registerData) => {
  try {
    const db: any = getList()

    db.push(data)

    localStorage.setItem('db', JSON.stringify(db));

    return "OK"
  }
  catch (err) {
    console.log("eee", err)
  }
}

export const updatePost = (key, data: registerData) => {
  try {
    const db: any = getList()

    let target = db.findIndex((item) => {
      return item.cpf === key
    })

    if (target === -1) {
      console.log("eee", "não encontrado")
      return "ERROR"
    }

    db.splice(target, 1);

    db.push(data)

    localStorage.setItem('db', JSON.stringify(db));

    return "OK"
  }
  catch (err) {
    console.log("eee", err)
  }
}

export const removePost = (data: registerData) => {
  try {
    const db: any = getList()

    let target = db.findIndex((item) => {
      return item.cpf === data.cpf
    })

    if (target === -1) {
      console.log("eee", "não encontrado")
      return "ERROR"
    }

    db.splice(target, 1);

    localStorage.setItem('db', JSON.stringify(db));

    return "OK"
  }
  catch (err) {
    console.log("eee", err)
  }
}

export const getItem = (key) => {
  const db: any = getList()

  let target = db.find((item) => item.cpf === key)

  return target
}