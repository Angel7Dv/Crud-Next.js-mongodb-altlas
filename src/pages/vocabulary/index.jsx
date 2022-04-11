import Card from "./Card"
import List from "./List"
import Panel from "./Panel"
import Layout from "../layout"

import dbConnect from '../../lib/dbConnect'
import WordsModel from '../../models/words'

export default function index({listWords}) {

    return (
        <Layout className="mx-auto container">
            <div className="flex space-x-1 justify-center mt-20">

                <Panel/>

                <Card/>
           
                <List listWords={listWords}/>
    
            </div>



        </Layout>
    )
}


export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await WordsModel.find({})
    const listWords = result.map((doc) => {
      const word = doc.toObject()
      word._id = word._id.toString()
      return word
    })
  
    return { props: { listWords: listWords } }
  }