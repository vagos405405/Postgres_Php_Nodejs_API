const Pool = require('pg').Pool
const pool = new Pool({
  user: '******',
  host: '*****',
  database: '*****',
  password: '*****',
  port: 5432,
})



const getCustom = (request, response) => {
  const schemaname = String(request.params.schemaname)
  const table =  String(request.params.table)
  const searchwhat =  String(request.params.searchwhat)
  const comparewith =  String(request.params.comparewith)
  const executor = request.params.executor
  console.log(schemaname)
  console.log(table)
  console.log(searchwhat)
  console.log(comparewith)
  console.log(executor)

  pool.query("SELECT * FROM "+schemaname+"."+table+" WHERE "+comparewith+" "+executor+" $1", [searchwhat], (error, results) => {
    if (error) {
      console.log(error)
      throw error
    }
    response.status(200).json(results.rows)
  })

}

const getCustomand = (request, response) => {
  const schemaname = String(request.params.schemaname)
  const table =  String(request.params.table)
  const searchwhat =  String(request.params.searchwhat)
  const comparewith =  String(request.params.comparewith)
  const executor = request.params.executor
  const andid = request.params.andid
  const andval = request.params.andval

  pool.query("SELECT * FROM "+schemaname+"."+table+" WHERE "+comparewith+" "+executor+" $1 AND "+andid+"="+andval+"", [searchwhat], (error, results) => {
    if (error) {
      console.log(error)
      throw error
    }
    response.status(200).json(results.rows)
  })

}

const postCustom = (request, response) => {
  const schemaname = String(request.params.schemaname)
  const table =  String(request.params.table)
  const data_array_columns = request.body.columns;
  const data_array_values = request.body.values;
  console.log(schemaname)
  console.log(table)
  console.log(data_array_columns)
  console.log(data_array_values)


  pool.query("INSERT INTO "+schemaname+"."+table+" ("+data_array_columns+") VALUES ("+data_array_values+")", (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json(results.rows)
  })

}




module.exports = {
  getCustom,
  getCustomand,
  postCustom
}
