
import { Chalk } from "chalk";


const chalk = new Chalk({ level: 3 });


const helpcontent = `

  portfolio - prabhanjan.dev    v0.0.1
  Prabhanjan Padhye ${chalk.dim("@Sparkenstein")} ${chalk.dim("<prabhanjan@fosslife.com>")}
  portfolio - a unique portfolio made with xterm

  ${chalk.bold.yellowBright("USAGE")}:
      just write the command and press enter. no flags required. ${chalk.green("ctrl + k")} to clear screen.

  ${chalk.bold.yellowBright("COMMANDS")}:
      ${chalk.green("info")}                see basic information and about me.
      ${chalk.green("skills")}              see skills in programming languages
      ${chalk.green("tools")}               tools and frameworks
      ${chalk.green("exp")}                 see works experience
      ${chalk.green("proj")}                personal projects and github
      ${chalk.green("social")}              social media links and contact information
      ${chalk.green("blog")}                blog link
      ${chalk.green("edu")}                 education, if that matters.
      ${chalk.green("theme")}               toggle theme
      ${chalk.green("font [size]")}         set font size - current is 20 (use not recommended, it messes up the ui)
      ${chalk.green("cls")}                 clear screen. Alias: ${chalk.green("clear")}, ${chalk.green("reset")}
`

const educontent = `
 Bachelor of Engineering (comp science)
 self-taught Programmer
 self-taught Author, Speaker`

const skillsconetent = `
 ${chalk.dim("languages and runtimes I have worked on")}
 ${chalk.yellow.bold("SKILLS:")} 
 
    ${chalk.green("javascript")}      Expert           ████████████████████     [6 years]

    ${chalk.green("typescript")}      Expert           ██████████████████░░     [5 years]
    
    ${chalk.green("python")}          Intermediate+    ████████████░░░░░░░░     [4 years]
    
    ${chalk.green("rust")}            Intermediate     ██████████░░░░░░░░░░     [3 years]
    
    ${chalk.green("node")}            Expert           ████████████████░░░░     [6 years]
    
    ${chalk.green("deno")}            Expert           ████████████░░░░░░░░     [2 years]

    ${chalk.green("mongodb")}         Advance          ██████████████░░░░░░     [2 years]

    ${chalk.green("postgres")}        Advance          ███████████████░░░░░░    [2 years]
`

const toolscontent = `
 ${chalk.dim("tools and frameworks I have worked on")}
 ${chalk.yellow.bold("TOOLS AND FRAMEWORKS:")} 
 
  ${chalk.green("react")}      Expert           ███████████████████░     [6 years]    ${chalk.green.dim("advance hooks, perf, ui libraries etc")}

  ${chalk.green("nextjs")}     Advance          ██████████████████░░     [5 years]    ${chalk.green.dim("SSR, CSR, ISG, SSG etc")}

  ${chalk.green("docker")}     Advance          ██████████████░░░░░░     [4 years]    ${chalk.green.dim("container maintainance, logs, balancing, small k8s")}

  ${chalk.green("aws")}        Intermediate     ████████████░░░░░░░░     [3 years]    ${chalk.green.dim("ec2, s3, lamda, rds, dynamodb, IAM etc")}

  ${chalk.green("vue")}        Intermediate     █████████░░░░░░░░░░░     [2 years]    ${chalk.green.dim("vue2, mid level projects")}

  ${chalk.green("sys adm")}    Advance          ██████████████░░░░░░     [4 years]    ${chalk.green.dim("self hosting, nginx, caddy, load balancer, server hardening etc")}

  ${chalk.green("dev")}        Advance          ████████████████░░░░     [4 years]    ${chalk.green.dim("git, linux, ssh, vim, vscode, cli tools")}
`

const expcontent = `
  ${chalk.dim("my previous work experience, including freelancing and professional work")}
  ${chalk.yellow.bold("WORK EXPERIENCE:")}
      
      ${chalk.green("freelancing")}           2014-2017      ${chalk.dim("[3 years]")}    Local and remote freelancing jobs, android development, static websites etc.

      ${chalk.green("open source")}           2018-present   ${chalk.dim("5+ years")}     many contributions + self owned projects.

      ${chalk.green("confluxsys")}            2017-2019      ${chalk.dim("[2 years]")}    Identity and access management company. worked with Visa

      ${chalk.green("Syngenta")}              2019-2021      ${chalk.dim("[1.5 years]")}  Fullstack developer. agritech. owned 4+ products

      ${chalk.green("masaischool")}           2021-2022      ${chalk.dim("[1.9 years]")}  EduTech. Senior backend engineer
      
      ${chalk.green("BigSpring")}             2022-present   ${chalk.dim("[1 year]")}      Senior full-stack developer. module lead FE.
`

const projcontent = `
  ${chalk.dim("Major projects I have worked on (open source)")}
  ${chalk.dim("all projects are on github with github.com/fosslife/[projectname]")}
  ${chalk.yellow.bold("PROJECTS:")}
    
      ${chalk.green("devtools-x")}            a cross platform desktop application with development utils   (rust + react)
      ${chalk.green("delta")}                 feature rich and safe url shortner and file uploader          (nodejs + redis)
      ${chalk.green("grambot")}               an automation telegram bot with multitude of features         (python)
      ${chalk.green("up")}                    nginx setup, management, deploy with just 1 command - up      (rust)
      ${chalk.green("define")}                beautiful english dictionary with pronunciations              (rust)
      ${chalk.green("awesome-ricing")}        awesome list of unix/linux ricing`

const socialcontent = `
  ${chalk.dim("following are my social media links. Feel free to reach out to me on any.")}
  ${chalk.dim("I am mostly available on email or telegram.")}
  ${chalk.yellow.bold("SOCIAL:")}
  
      ${chalk.green("email")}        ${chalk.underline("prabhanjan@fosslife.com")}
      ${chalk.green("telegram")}     ${chalk.underline("@Sparkenstein")}
      ${chalk.green("youtube")}      ${chalk.underline("/channel/UCutvKvGmaeyOrRq5yuF9uEw")}  [Educational content ]
      ${chalk.green("github")}       ${chalk.underline("@Sparkenstein")}
      ${chalk.green("linkedin")}     ${chalk.underline("in/sparkenstein")}
      ${chalk.green("twitter")}      ${chalk.underline("@zetabites")}
      ${chalk.green("reddit")}       ${chalk.underline("@Sparkenstein")}
      ${chalk.green("steam")}        ${chalk.underline("SirSparkenstein")}  [I do play a lot of video games]
      ${chalk.green("twitch")}       ${chalk.underline("SirSparkenstein")}  [Game streams. old.]`

const blogcontent = `
  ${chalk.yellow.bold("BLOG:")}
    
    I do write small time educational blogs on opensource
    visit ${chalk.green.underline("https://fosslife.com")} `


const infocontent = `
  ${chalk.yellow.bold("ABOUT ME:")}

    Hey there! I'm a ${chalk.green("Full-Stack")}  Developer with over six+ years under my belt. 
    My coding journey started off as a freelancer and most of what I know about programming, 
    I taught myself. Of course, having a Bachelor's in Computer Science does help a bit too.

    I'm super into ${chalk.green("open-source")} stuff. I can chat your ear off about Linux, 
    Vim, Emacs, docker, cloud, programming languages - you name it. Been playing around with these 
    even before I kicked off my dev career. I've chipped in on a bunch of 
    projects like Deno, but what really gets me going is cooking up my own open-source creations.
    
    When it comes to tech, I'm all about the Full-Stack ${chalk.green("JS/TS")} scene. 
    I'm pretty flexible with most frameworks there and I try to use rust for most of my personal projects.

    I also self host A LOT OF things, like my own mail server, my own cloud storage, my own git server, etc. 
    most of which is not public for obvious reasons.
    
    Apart from coding, I dabble in ${chalk.green("writing")} and ${chalk.green("speaking")}. 
    I've done talks at big conferences and organized a fair share of local meetups,
    mostly chatting about JS and Rust. I've put together more than 10 of these local gatherings. 
    Also, I blog over at ${chalk.green.underline("https://fosslife.com")}  it's where I spill my thoughts on all things open-source.
  
  `


export { educontent, helpcontent, skillsconetent, toolscontent, expcontent, projcontent, socialcontent, blogcontent, infocontent }
