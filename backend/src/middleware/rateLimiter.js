import rateLimit from "../config/upstash.js"

// crate a rate limiter function
const rateLimiter = async(req, res, next)=>{
  try{
    const {success} = await rateLimit.limit("my-limit-key");
    if (!success){
      return res.status(429).json({"message" : "Too many requests"});
    }
    next()
  }catch(err){
    console.error("Rate limit error" , next);
    next(err);
  }
}

export default rateLimiter