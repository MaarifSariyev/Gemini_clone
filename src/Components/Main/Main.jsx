import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {



    const {onSent, recentPromts, showResult, loading, resultData,setInput, input}= useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini clone</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">



           {!showResult
           ?<>
            <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How can l help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum impedit, expedita consequuntur. </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus in quaerat nesciunt repellendus. </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae modi alias ad atque et!</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
             </> 
             :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPromts}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ? <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                          </div> 
                           : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
             </div>
                }


            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter promt here...' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main