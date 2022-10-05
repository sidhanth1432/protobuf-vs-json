const express=require("express");
const fetch=require("node-fetch");
// const resJSON=
const app=express();
const protobuf=require("protobufjs");
const https=require("https");
const { runInContext } = require("vm");

run();
async function run(){

    const root=await protobuf.load("photos.proto");

    let Photos=root.lookupType("photospackage.Photos");
}

app.get("/jsonProtocall",async(req,res)=>{
    const agent=newhttps.Agent({
        rejectUnauthorized:false,
    });


    res.send(JSON.stringify(resJSON));
});


app.get("/protobufProtocall",async(req,res)=>{
    const agent=newhttps.Agent({
        rejectUnauthorized:false,
    });


    const buf=Photos.encode({photos:resJSON}).finish();

    res.send(buf);



});