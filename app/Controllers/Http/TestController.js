'use strict'

const Test = use('App/Models/Test')

class TestController {

  async index () {
    return await Test.all()
  }

  async store ({ request, response }) {
    const test = await Test.create(request.all())
    return test
  }

  async update({ request, params }){
    const test = await Test.find(params.id)
    test.name = request.input('name')
    test.umur = request.input('umur')
    test.save()

    return order
  }

  async delete({ request, params }){
    const test = await Test.find(params.id)
    test.delete()

    return {success: true}
  }
}

module.exports = TestController
