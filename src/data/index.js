
import { Chalk } from "chalk";


const chalk = new Chalk({ level: 3 });


const helpcontent = `
portfolio - prabhanjan.dev    v0.0.1
Prabhanjan Padhye  <prabhanjan@fosslife.com>
portfolio - a unique portfolio made with xterm

${chalk.bold.yellowBright("USAGE")}:
    just write the command and press enter. no flags required

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
 
    ${chalk.green("javascript")}      Expert           ████████████████████     [5 years]

    ${chalk.green("typescript")}      Expert           ██████████████████░░     [4 years]
    
    ${chalk.green("python")}          Intermediate+    ████████████░░░░░░░░     [4 years]
    
    ${chalk.green("rust")}            Intermediate     ██████████░░░░░░░░░░     [2 years]
    
    ${chalk.green("node")}            Expert           ████████████████░░░░     [5 years]
    
    ${chalk.green("deno")}            Expert           ████████████░░░░░░░░     [2 years]

    ${chalk.green("mongodb")}         Advance          ██████████████░░░░░░     [2 years]

    ${chalk.green("postgres")}        Advance          ███████████████░░░░░░    [2 years]
`

const toolscontent = `
 ${chalk.dim("tools and frameworks I have worked on")}
 ${chalk.yellow.bold("TOOLS AND FRAMEWORKS:")} 
 
  ${chalk.green("react")}      Expert           ███████████████████░     [5 years]    ${chalk.green.dim("advance hooks, perf, ui libraries etc")}

  ${chalk.green("nextjs")}     Advance          ██████████████████░░     [4 years]    ${chalk.green.dim("SSR, CSR, ISG, SSG etc")}

  ${chalk.green("docker")}     Advance          ██████████████░░░░░░     [4 years]    ${chalk.green.dim("container maintainance, logs, balancing, small k8s")}

  ${chalk.green("aws")}        Intermediate     ████████████░░░░░░░░     [3 years]    ${chalk.green.dim("ec2, s3, lamda, rds, dynamodb, IAM etc")}

  ${chalk.green("vue")}        Intermediate     █████████░░░░░░░░░░░     [2 years]    ${chalk.green.dim("vue2, mid level projects")}

  ${chalk.green("sys adm")}    Advance          ██████████████░░░░░░     [4 years]    ${chalk.green.dim("nginx, caddy, load balancer, server hardening etc")}

  ${chalk.green("dev")}        Advance          ████████████████░░░░     [4 years]    ${chalk.green.dim("git, linux, ssh, vim, vscode, cli tools")}
`

const expcontent = `
  ${chalk.dim("my previous work experience, including freelancing and professional work")}
  ${chalk.yellow.bold("WORK EXPERIENCE:")}
      
      ${chalk.green("freelancing")}           2014-2017      ${chalk.dim("[3 years]")}    Local and remote freelancing jobs, android development, static websites etc.

      ${chalk.green("open source")}           2018-present   ${chalk.dim("5+ years")}     many contributions + self owned projects.

      ${chalk.green("confluxsys")}            2017-2019      ${chalk.dim("[2 years]")}    Identity and access management company. worked with Visa

      ${chalk.green("Syngenta")}              2019-2021      ${chalk.dim("[1.5 years]")}  Fullstack developer. agritech. owned 4+ products

      ${chalk.green("masaischool")}           2021-present   ${chalk.dim("[1.9 years]")}  EduTech. Senior backend engineer`

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
    
    I am a ${chalk.green("full-stack")} developer with 5+ years of experience.
    I started my career as a ${chalk.green("freelancer")}. I am a mostly self-taught programmer
    even though I have completed bachelors of engineering in computer science.

    I am an open-source enthusiat, love to talk on ${chalk.green("linux")} 🐧  and popular open-source tools
    like ${chalk.green('vim, emacs')}, been using it from a long time, even before I started my career as dev.
    I have so far contributed to many projects including ${chalk.green("deno")} but I mostly like to develop
    my own open-source projects.

    I have experience in full-stack ${chalk.green("JS/TS")} ⬡ ecosystem, anything goes (execpt Angular I guess).
    apart from that, I try to write all my projects in ${chalk.green("Rust")} ⚙ because I love rust.

    I am also a part time ${chalk.green("author/speaker")}. I have experience in talking in large conferences
    as well as organizing local meet-ups. So far I have organized 10+ local meetups mostly on JS and Rust. 
    I do also write blogs on ${chalk.green.underline("https://fosslife.com")}`


export { educontent, helpcontent, skillsconetent, toolscontent, expcontent, projcontent, socialcontent, blogcontent, infocontent }