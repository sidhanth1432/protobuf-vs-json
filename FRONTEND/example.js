import proto from './photos.proto';
const protobuf=require("protobufjs");

let Photos;


async function run(){
    protobuf.load(proto,(err,root)=>{
        Photos=root.lookupType("photospackage.Photos");

    });
}
run();

export const example=()=>{


const fetchCall=()=>{
    fetch("url/jsonProtocall")
    .then((data)=>data.json())
    .then((result)=>{
        console.log(result);
    });
};

const fetchCallProto=()=>{
    fetch("url/protobufprotocol")
    .then((data)=>data.arrayBuffer())
    .then((result)=>{
        const decodeData=Buffer.from(result);

    });
};





}