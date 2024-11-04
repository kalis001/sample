import React from 'react'
import './Gmail.css'
import inbox from './inbox_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import starred from './star_rate_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import snoozed from './schedule_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import send from './send_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import draft from './draft_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import important from './label_important_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import chat from './chat_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import scheduled from './schedule_send_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import allmail from './stacked_email_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import spam from './report_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import trash from './delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import more from './arrow_drop_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import gmailogo from './logo_gmail_lockup_default_1x_r5 (1).png'
import search from './search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import filter from './tune_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import apps from './apps_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import check from './check_box_outline_blank_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'
import promotion from './sell_baseline_nv700_20dp.png'
import social from './group_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png'

export default function Gmail() {
  return (
    <div>
        <div className='container'>
            <div className='row '>
              <div className='d-flex mt-1'>
                <button class="gbtn btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg></button>
                <div class="offcanvas offcanvas-start w-25" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                {/* <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5> */}
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                 <button className='composebtn'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                 <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
                 </svg><a href="#"> compose</a></button>
            <div className='gpara mt-4 ps-2'>
                 <p><img src={inbox} width={22}></img> inbox</p>
                 <p><img src={starred} width={22}></img> starred</p>
                 <p> <img src={snoozed} width={22} /> snoozed</p>
                 <p><img src={send}width={22} /> send</p>
                 <p><img src={draft} width={22}/> drafts</p>
            </div>
             <div class="gmore dropdown">
                <a class="gdropa " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={more}width={35}  />More</a>
              <ul class="gdrop dropdown-menu  ">
                <li ><a class="dropdown-item" href="#"><img src={important} width={22}></img> important</a></li>
                <li><a class="dropdown-item" href="#"><img src={chat}width={22} /> charts</a></li>
                <li><a class="dropdown-item" href="#"> <img src={scheduled} width={22}/> schelduled</a></li>
                <li><a class="dropdown-item" href="#"><img src={allmail}width={22} /> all mail</a></li> 
                <li><a class="dropdown-item" href="#"><img src={spam} width={22} /> spam</a></li>
                <li><a class="dropdown-item" href="#"><img src={trash} width={22} /> trash</a></li>
              </ul>
            </div>
                </div>
                </div>
              
              <div className='ms-3'>
                <img src={gmailogo}/>
              </div>
              <div>
              <nav class="gmailnavbar bg-body-tertiary ms-5 ps-5">
                <form class="container-fluid">
                <div class="input-group">
                <span class="input-group-text " id="basic-addon1"><img src={search}width={22}/></span>
                <input type="text" class="gminput form-control " placeholder="Search mail" aria-label="Username" aria-describedby="basic-addon1"></input>
                <img src={filter} width={22} />
              </div>
              </form>
              </nav>
              </div>
              <div className='svg d-flex mt-'>
              <div class="gmdropdown">
              <button class="gmsvgbtn border border-circle ms-5 mt-1" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" className='gsvg1 ms-0' width="25" height="25" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>
              </button>
              <ul class="dropdown-menu ">
              <li><a class="dropdown-item " href="#">Help</a></li>
              <li><a class="dropdown-item" href="#">Training</a></li>
              <li><a class="dropdown-item" href="#">Updates</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Send feedback to google</a></li>
              </ul></div>
              <svg xmlns="http://www.w3.org/2000/svg" className='gsvg2 ms-5 mt-2' width="22" height="22" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
              </svg>
              <img className='ms-3 mt-2' src={apps}width={25} height={25} />
              </div>
              </div>
              <div className='inboxpri mt-3'>
              <div>
              <div className='mt-4'>
              <button class="gmcheckbox btn dropdown-toggle " type="button"  aria-expanded="false">
              <img src={check} width={18} />
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" className='arrow ms-3 mt-1' width="18" height="18" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className='ms-4' width="18" height="18" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>
              </div>
            </div>
            
            <div className='row d-flex  mt-3'>
              <div className='primary col d-flex'>
                <img className='' src={inbox} width={20} height={20}/> 
                <p className='ms-3'>Primary</p>
              </div>
              <div className='col d-flex '>
                <img className='mt-1' src={promotion} width={20} height={20} />
                <p className='ms-3'>Promotions</p>
              </div>
              <div className='col d-flex'>
                <img className='ms-5' src={social} width={20} height={20} />
                <p className='ms-3'>Socials</p>
              </div>
            </div>
            <div className=''>
              <div className=' d-flex'>
              <img className='mt-1 me-0 ms-0' src={check} width={18}height={18}/>
              <p><img src={starred} width={20}></img>Glassdoor jobs  <span className='gmpara1 '>Sr ServiceNow (SNOW) Software Engineer role.....</span></p>
              <p className='ps-5'>11:41am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>Cuvette Tech  <span className='gmpara3  '>2024Grad From Tier3 Cracks a job of developer......</span></p>
              <p className='ps-5'>09:29am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>developer <span className='gmpara4  '>Don't Forget to attend these walk-in-interview.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div> <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div> <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
              <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div> <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div> <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div> <div className='d-flex'>
              <img className='mt-1' src={check} width={18}height={18}/>
              <p ><img className='' src={starred} width={20}></img>reminder  <span className='gmpara2  '>Reminder:Don't Forget to attend these walk-in.....</span></p>
              <p className='ps-5'>10:45am</p>
              </div>
            </div>
            </div>
            </div>
          
        </div>
    </div>
  )
}
