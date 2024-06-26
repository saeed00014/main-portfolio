import imgLink1 from './images/laptop.png'
import imgLink2 from './images/phone.png'
import imgLink3 from './images/bodySign.png'
import imgLink4 from './images/bodyForm.png'
import imgLink5 from './images/bodyCard.png'

import artonomy1 from './images/artonomy1.png'
import artonomy2 from './images/artonomy2.png'
import artonomy from './videos/Artonomy.mp4'

import Ajorplusphone from './images/Ajorplusphone.png'
import Ajorplushdash from './images/Ajorplushdash.png'
import Ajorplusdata from './images/Ajorplusdata.png'
import Ajorpluslogin from './images/Ajorpluslogin.png'
import Ajorplususer from './images/Ajorplususer.png'
import Ajorplusedit from './images/Ajorplusedit.png'
import Ajorplusqomer from './images/Ajorplusqomer.png'

import AjorPlus from './videos/AjorplusVideo.mp4'

export const persian = [
  [
    {
      link: "/contact",
      names: 'ارتباط',
      name: 'ارتباط'
    },
    {
      link: "/resume",
      names: 'رزومه',
      name: 'رزومه'
    },
    {
      link: '/project',
      names: 'پروژه ها',
      name: 'پروژه ها'
    },
    {
      link: '/skills',
      names: 'مهارت ها',
      name: 'مهارت ها'
    }
  ],
  [
    {
      nameRight: [{name:'.هستم', id:'1'},{name:'سعید', id:'2'},{name:',سلام', id:'3'}],
      nameLeft: [{name:'وب', id:'1'},{name:'نویس', id:'2'},{name:'برنامه', id:'3'}],
      disTop: 
      'من یک برنامه نویس وب هستم و تمرکز اصلی ام بر فرانت اند هست',
      disBottom: 
      'پورتفولیوی من رو برسی کنید تا من رو بیشتر بشناسید',
      contact: '  ارتباط با من'
    }
  ],
  [
    {
      title: 'رزومه',
      dis: 'دانلود رزومه',
      link: "https://cvbuilder.me/Builder/Pdf/fa/template34/0e72f72f-53d1-425e-a4b6-ae1e5d495aa0/MyResume-331[www.cvbuilder.me]478.pdf"
    }
  ],
  [
    {
      title: 'ارتباط با من',
      text: 'پیام خود را ارسال کنید از طریق ایمیل پاسخ میدهم',
      name: 'اسم',
      email: 'ایمیل',
      message: 'پیام',
      submit: 'ارسال'
    }
  ],
  [
    {
      title: 'من رو بشناسید',
      dis: 
      'بیست و یک سال دارم و از نه ماه پیش برنامه نویسی وب رو شروع کردم به دنبال فرصت های شغلی هستم که بتونم پیشرفت کنم و نقش ماثری در پیشرفت کارها داشته باشم',
      dis1: 
      'تو این مدت تعدادی پروژه انجام دادم که میتونید اون ها رو برسی کنید',
      button: 'پروژه ها',
      titleSkill: 'مهارت های من',
      skills: [
        'Html',
        'Css',
        'Javascript',
        'Es5/Es6',
        'ReactJs',
        'Redux',
        'Redux Toolkit',
        'NodeJs',
        'ExpressJs',
        'Rest-api',
        'NextJs',
        'TypeScript',
        'git&github',
        'ui/ux',
      ]
    }
  ],
  [
    {
      id: '1',
      Link1: artonomy2,
      Link2: artonomy1,
      title: '(پروژه فعلی) Artonomy',
      dis:
      'این پروژه فعلی منه یه سایت هنریه که هنوز کامل نیست و میتونید تعدادی از بخش های کامل شده رو مشاهده کنید',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'Figma'
      ],
      links: [
        
      ],
      HashLinks: '/project/#1',
      button: 'مشاهده توضیحات',
      titlePerview: 'Artonomy توضیحات ',
      viddetails: 'این یک نمونه ریسپانسیو از صفحه اکسپلور و هدر سایت هست',
      video: artonomy,
      details: [

      ]
    },
    {
      id: '2',
      Link1: Ajorplushdash,
      Link2: Ajorplusphone,
      Link4: Ajorpluslogin,
      Link3: Ajorplusdata,
      Link5: Ajorplususer,
      Link5: Ajorplusqomer,
      title: 'AjorPlus',
      dis:
      'این یک پروژه خوصوصیه که تازه تمومش کردم یک کارخونه آجره که تعدادی کوره داره و هر کوره که قابلیت تغییر اطلاعات اضافه و حذف اطلاعات اضافه کردن کاربر با سطح دسترسی لاگین و... رو داره',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'php',
        'mysql'
      ],
      links: [
        
      ],
      HashLinks: '/project/#2',
      button: 'مشاهده توضیحات',
      titlePerview: 'AjorPlus توضیحات',
      video: AjorPlus,
      details: [
        {
          link: Ajorpluslogin,
          name: 'ورود',
          dis: 'ورود با اطلاعات حساب کاربری'
        },
        {
          link: Ajorplushdash,
          name: 'داشبورد',
          dis: ' اطلاعات کلی از کوره ها و وضعیت دهانه ها شون ( وضعیت پخت آجر ها و آجرهای داخل هر دهانه ) رو به همراه نمودار نشون میده'
        },
        {
          link: Ajorplusdata,
          name: 'داده ها و اطلاعات',
          dis: 'همه داده های موجود رو دسته بندی میکنه که قابلیت جستجو دسته بندی بر اساس وضعیت و امکان نشان دار کردن داده ها بعلاوه تعریف و حذف داده رو داره'
        },
        {
          link: Ajorplususer,
          name: 'مدیریت دسترسی و کاربران',
          dis: 'کاربران تعریف شده رو نمایش میده امکان تعریف کاربر حذف کاربر و تغییر اطلاعات کاربران و تعیین سطح دسترسی برای هر کاربر رو داره'
        }
      ]
    },
    {
      id: '3',
      Link1: imgLink1,
      Link2: imgLink2,
      Link3: imgLink3,
      Link4: imgLink4,
      Link5: imgLink5,
      title: 'BodyBuild',
      dis: 'این اولین کار من بوده که خیلی وقت پیش درستش کردم کاملا ریسپانسیوه و فروشگاه و بخش ساین این و ساین اوت داره',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'ExpressJs',
        'RestApi'
      ],
      links: [

      ],
      HashLinks: '/project/#3',
      button: 'مشاهده توضیحات',
      titlePerview: 'BodyBuild توضیحات',
      details: [
        {
          link: imgLink3,
          name: 'ثبت نام و ورود',
          dis: 'امکان ساخت اکانت کاربری و ورود به آن'
        },
        {
          link: imgLink5,
          name: 'فروشگاه و سبد خرید',
          dis: 'اضافه کردن محصولات به کارت خرید و تغییر مقدار وحذف آن'
        },
        {
          link: imgLink4,
          name: 'بخش نظرات و بازخوردها',
          dis: 'اضافه کردن نظر خود'
        }
      ]
    }
  ],
  [
    {
      aboutTitle: 'درباره من',
      aboutDis: 'درباره من و مهارت هام بیشتر بخوانید',
      ProjectsTitle: 'پروژه ها',
      ProjectsDis: 'تعدادی از پروژه هایی که انجام دادم رو برسی کنید',
      ContactTitle: 'ارتباط با من',
      ContactDis: 'پیام خود را ارسال کنید از طریق ایمیل پاسخ میدهم'
    }
  ],
  [
    {
      text:'صفحه ای که به دنبال آن هستید یافت نشد',
      link: 'بازگشت به صفحه اصلی'
    }
  ]
]

export const english = [
  [
    {
      link: '/project',
      names: 'Projects',
      name: '01.Projects'
    },
    {
      link: '/skills',
      names: 'skills',
      name: '02.skills'
    },
    {
      link: "/resume",
      names: 'Resume',
      name: '03.Resume'
    },
    {
      link: "/contact",
      names: 'Contact',
      name: '04.Contact'
    }
  ],
  [
    {
      nameLeft: [{name:'H', id:'1'},{name:'i', id:'2'},{name:',', id:'3'},{name:'I', id:'4'},{name:'m', id:'5'},{name:'S', id:'6'},{name:'a', id:'7'},{name:'e', id:'8'},{name:'e', id:'9'},{name:'d', id:'10'},{name:'.', id:'11'}],
      nameRight: [{name:'W', id:'1'},{name:'e', id:'2'},{name:'b', id:'3'},{name:'D', id:'4'},{name:'e', id:'5'},{name:'v', id:'6'},{name:'e', id:'7'},{name:'l', id:'8'},{name:'o', id:'9'},{name:'p', id:'10'},{name:'e', id:'11'},{name:'r', id:'12'}],
      disTop: 'Im a Web Developer mainly Focused onFrontend (JavaScript)',
      disBottom: 'Take your Time to know Me Better',
      contact: 'Contact me'
    }
  ],
  [
    {
      title: 'Resume.',
      dis: 'download Resume',
      link: "https://cvbuilder.me/Builder/Pdf/en/template34/60bfaf67-8eda-43bc-b668-185e77348195/MyResume-719[www.cvbuilder.me]566.pdf"
    }
  ],
  [
    {
      title: 'contact me',
      text: 'send me a message ill answer you via email',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send'
    }
  ],
  [
    {
      title: 'Get to know me',
      dis: 'Im 21 Years old and started web development 5 mounth ago and im learning more about it everyday.',
      dis1: 'Im looking for job opportunitys that i can contribute and learn more. i have some projects to show you more my skills and expriences.',
      button: 'My Project',
      titleSkill: 'My Skills',
      skills: [
        'Html',
        'Css',
        'Javascript',
        'Es5/Es6',
        'ReactJs',
        'Redux',
        'Redux Toolkit',
        'NodeJs',
        'ExpressJs',
        'Rest-api',
        'NextJs',
        'TypeScript',
        'git&github',
        'ui/ux',
      ]
    }
  ],
  [
    {
      id: '1',
      Link1: artonomy2,
      Link2: artonomy1,
      title: 'Artonomy(current project)',
      dis:
      'This is my current project Its an Art website and its not complete yet but you can visit some complete parts of it',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'Figma'
      ],
      links: [
        
      ],
      HashLinks: '/project/#1',
      button: 'Perview',
      titlePerview: 'Artonomy.Perview ',
      viddetails: 'Here is a responsive design of the Website explore page and header',
      video: artonomy,
      details: [

      ]
    },
    {
      id: '2',
      Link1: Ajorplushdash,
      Link2: Ajorplusphone,
      Link4: Ajorpluslogin,
      Link3: Ajorplusdata,
      Link5: Ajorplususer,
      Link5: Ajorplusqomer,
      title: 'AjorPlus',
      dis:
      'This is my newest project a private website its a brick factory witch has some forges and we are able to edit our forges delete or add more mouths for those. you can also make users for login and access',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'php',
        'mysql'
      ],
      links: [
        
      ],
      HashLinks: '/project/#2',
      button: 'Perview',
      titlePerview: 'AjorPlus.Perview ',
      video: AjorPlus,
      details: [
        {
          link: Ajorpluslogin,
          name: 'Sign in',
          dis: 'Sign in with your username and password'
        },
        {
          link: Ajorplushdash,
          name: 'Dashboard',
          dis: 'Shows overall info of forges and mouths condition (state, type and ...) with charts'
        },
        {
          link: Ajorplusdata,
          name: 'Data and Information',
          dis:  'groups all the available Data you can search for a spacific data and its possible to mark add and delete data'
        },
        {
          link: Ajorplususer,
          name: 'Manage Users and Access level',
          dis: 'it Shows all made users so you can add delete or edit any user and also manage their access level'
        }
      ]
    },
    {
      id: '3',
      Link1: imgLink1,
      Link2: imgLink2,
      Link3: imgLink3,
      Link4: imgLink4,
      Link5: imgLink5,
      title: 'BodyBuild',
      dis: 
      'this is my first project i made it very premitive cause i made it long ago but its worth looking at',
      skills: [
        'ReactJs',
        'ReduxToolkit',
        'ExpressJs',
        'RestApi'
      ],
      links: [

      ],
      HashLinks: '/project/#3',
      button: 'Perview',
      titlePerview: 'BodyBuild.Perview',
      details: [
        {
          link: imgLink3,
          name: 'Sign up and Sign in',
          dis: 'you can sign up and sign in and see your account detailes'
        },
        {
          link: imgLink5,
          name: 'shop and shopping card',
          dis: 'you can shop add items you shopping card and change the amount of them or delete them from your card'
        },
        {
          link: imgLink4,
          name: 'submit openion',
          dis: 'you can submit your openion'
        }
      ]
    }
  ],
  [
    {
      aboutTitle: 'About Me',
      aboutDis: 'Read More About Me and My Skills',
      ProjectsTitle: 'Projects',
      ProjectsDis: 'take a look at some of my my projects',
      ContactTitle: 'Contact Me',
      ContactDis: 'Send me a message ill answer you via email'
    }
  ],
  [
    {
      text:'the page you are looking for is not found',
      link: 'go back to home'
    }
  ]
]