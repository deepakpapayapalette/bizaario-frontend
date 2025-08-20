
// import { useLoaderData, useParams } from 'react-router'
// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentSection from './article-inner/CommentSection';
import ArticleLayout1 from './article-inner/ArticleLayout1';
import { useLocation,useParams } from "react-router";

const ArticleDetail = () => {
      const articleState = useLocation();
     

      //  const { id } = useParams();
        // console.log(id);
      

  // console.log(articleState,"articleState")
    // const params = useParams();
    // const datatest = useLoaderData();
    // console.log(datatest)
    // console.log(params, 'param')
 

  return (
    <>
      {/* {params.id} */}
      <div>
        <ArticleLayout1 articleSingleData={articleState.state } />
      </div>
      <div>
        
          {/* <CommentSection/> */}
      </div>
    </>
  )
}

export default ArticleDetail
