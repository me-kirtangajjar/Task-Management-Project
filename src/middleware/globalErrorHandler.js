export default (err,req,res,next)=>{
    res.status(err.statusCode).send(err);
}