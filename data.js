const courseData = [
    {
        category: "1. Human Resources (HR)",
        situations: [
            { 
                id: 1, 
                title: "Asking for a Raise", 
                audioFile: "01_Human_Resources_HR_Asking_for_a_Raise.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> Can we talk about my <span class="vocab" data-tr="maaş">salary</span>? I work very <span class="vocab" data-tr="sıkı / zor">hard</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Yes, we can. You did a <span class="vocab" data-tr="harika">great</span> job this year.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. I do more work now, so I'd like more money.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> How much more money do you want?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I'd like a 10% <span class="vocab" data-tr="artış / zam">increase</span>, please.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's a lot, but I'll <span class="vocab" data-tr="sormak">ask</span> the boss.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. Here is a <span class="vocab" data-tr="liste">list</span> of my new <span class="vocab" data-tr="görevler">tasks</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Great. I'll <span class="vocab" data-tr="aramak">call</span> you next week.</p>
                `
            },
            { 
                id: 2, 
                title: "The First Day", 
                audioFile: "02_Human_Resources_HR_The_First_Day.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">HR Person:</span> <span class="vocab" data-tr="hoş geldin">Welcome</span> to the company! Here are your papers.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Thank you! I'm very <span class="vocab" data-tr="mutlu">happy</span> to be here.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Do you have any questions about the <span class="vocab" data-tr="kurallar">rules</span>?</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Yes. When does my health <span class="vocab" data-tr="sigorta">insurance</span> start?</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> It starts next month. You don't have to <span class="vocab" data-tr="beklemek">wait</span> long.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> That's good. Do I need to <span class="vocab" data-tr="imzalamak">sign</span> these papers now?</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Yes, please sign them and <span class="vocab" data-tr="geri vermek">give back</span> them to me.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Okay, I'll do it right now.</p>
                `
            },
            { 
                id: 3, 
                title: "Leaving the Company", 
                audioFile: "03_Import_-_Export_Leaving_the_Company.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">HR Person:</span> Thank you for talking to me on your last day.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> No problem. I <span class="vocab" data-tr="keyif aldım">enjoyed</span> my time here.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Why are you <span class="vocab" data-tr="ayrılmak">leaving</span> the company?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I found a new job. It's <span class="vocab" data-tr="daha yakın">closer</span> to my house.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> I understand. A long drive is very <span class="vocab" data-tr="yorucu">tiring</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, it is. But my manager here was very <span class="vocab" data-tr="kibar">kind</span>.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> That's good to hear. We <span class="vocab" data-tr="dilemek">wish</span> you the best.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Thank you very much for everything.</p>
                `
            }
        ]
    },
    {
        category: "2. Import / Export",
        situations: [
            { 
                id: 4, 
                title: "Problem at Customs", 
                audioFile: "04_Import_-_Export_Problem_at_Customs.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> We have a <span class="vocab" data-tr="sorun">problem</span>. The ship didn't leave the <span class="vocab" data-tr="liman">port</span>.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Oh no. Why is the <span class="vocab" data-tr="kargo / yük">cargo</span> still there?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> The <span class="vocab" data-tr="gümrük">customs</span> office needs a <span class="vocab" data-tr="farklı">different</span> paper for the goods.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Didn't we send all the <span class="vocab" data-tr="doğru">correct</span> forms?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I thought so, but they <span class="vocab" data-tr="değiştirdi">changed</span> the rules yesterday.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Please call them and send the new form <span class="vocab" data-tr="hızlıca">quickly</span>.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I'm doing it right now. I'll email the customer too.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Good idea. Tell them it will be one day <span class="vocab" data-tr="geç">late</span>.</p>
                `
            },
            { 
                id: 5, 
                title: "Buying Materials", 
                audioFile: "05_Import_-_Export_Buying_Materials.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Buyer:</span> The price of cotton is <span class="vocab" data-tr="yükseliyor">going up</span> next month.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's <span class="vocab" data-tr="kötü">bad</span> news for our clothes factory.</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> Yes. We shouldn't <span class="vocab" data-tr="beklemek">wait</span>. We should <span class="vocab" data-tr="satın almak">buy</span> more now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Can our <span class="vocab" data-tr="tedarikçi">supplier</span> send us <span class="vocab" data-tr="fazladan">extra</span> cotton this week?</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> I'll ask them. But we might have to pay for <span class="vocab" data-tr="hızlı">fast</span> shipping.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's okay. It's <span class="vocab" data-tr="daha ucuz">cheaper</span> than the new price.</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> I'll call the supplier <span class="vocab" data-tr="hemen">right away</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Thanks. Let me know what they say.</p>
                `
            },
            { 
                id: 6, 
                title: "Broken Goods", 
                audioFile: "06_Work_Conflicts_Problems_at_Work_Broken_Goods.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> The boxes <span class="vocab" data-tr="vardı / ulaştı">arrived</span>, but some of them are <span class="vocab" data-tr="kırık / bozuk">broken</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> How many boxes are broken?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> About twenty boxes. The glass inside is in pieces.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's <span class="vocab" data-tr="berbat">terrible</span>. Take photos of the broken glass.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I already took photos on my phone.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Good. We need to send them to the <span class="vocab" data-tr="sigorta">insurance</span> company.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Should I <span class="vocab" data-tr="çöpe atmak">throw away</span> the broken things?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Not yet. Keep them in the <span class="vocab" data-tr="köşe">corner</span> until I <span class="vocab" data-tr="kontrol etmek">check</span>.</p>
                `
            }
        ]
    },
    {
        category: "3. Work Conflicts",
        situations: [
            { 
                id: 7, 
                title: "Too Much Noise", 
                audioFile: "07_Work_Conflicts_Problems_at_Work_Too_Much_Noise.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> Excuse me, can you <span class="vocab" data-tr="sesini kısmak">turn down</span> your music?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Oh, sorry. Is it too <span class="vocab" data-tr="yüksek sesli">loud</span>?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, it is. I can't <span class="vocab" data-tr="odaklanmak">focus</span> on my work.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I didn't <span class="vocab" data-tr="fark etmek">realize</span>. I'll use my <span class="vocab" data-tr="kulaklık">headphones</span>.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Thank you so much. I <span class="vocab" data-tr="takdir etmek">appreciate</span> it.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> You're welcome. Tell me if I'm loud again.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> I will. Good luck with your <span class="vocab" data-tr="proje">project</span>!</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Thanks, you too.</p>
                `
            },
            { 
                id: 8, 
                title: "A Late Report", 
                audioFile: "08_Work_Conflicts_Problems_at_Work_A_Late_Report.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Why didn't you <span class="vocab" data-tr="bitirmek">finish</span> the <span class="vocab" data-tr="rapor">report</span> on <span class="vocab" data-tr="zaman">time</span>?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I'm sorry. I hadn't <span class="vocab" data-tr="teslim aldı">received</span> the numbers from John.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> You should tell me when you have a <span class="vocab" data-tr="sorun">problem</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> You're right. I thought John would send them yesterday.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Next time, please send me an email.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I won't make this <span class="vocab" data-tr="hata">mistake</span> again. I'm very sorry.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> It's okay. Just finish it by <span class="vocab" data-tr="yarın">tomorrow</span> morning.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I'll do it first thing in the morning.</p>
                `
            },
            { 
                id: 9, 
                title: "Sharing the Work", 
                audioFile: "09_Job_Interviews_Sharing_the_Work.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> I feel like I'm doing all the work for our project.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Really? I did the <span class="vocab" data-tr="araştırma">research</span> and wrote the first part.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> But I'm making the whole <span class="vocab" data-tr="sunum">presentation</span> by myself.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I can help you with the presentation. What do you need?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Can you <span class="vocab" data-tr="bulmak">find</span> some <span class="vocab" data-tr="resimler">pictures</span> and <span class="vocab" data-tr="kontrol etmek">check</span> the <span class="vocab" data-tr="yazım">spelling</span>?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, of course. Send it to me now.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Okay, I'll send it in five minutes.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Great. We make a good team when we talk.</p>
                `
            }
        ]
    },
    {
        category: "4. Job Interviews",
        situations: [
            { 
                id: 10, 
                title: "Meeting the Manager", 
                audioFile: "10_Job_Interviews_Meeting_the_Manager.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Hello, please <span class="vocab" data-tr="oturmak">sit down</span>. Welcome to our office.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Thank you. It's nice to <span class="vocab" data-tr="tanışmak">meet</span> you.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Can you tell me about your last job?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I was a sales <span class="vocab" data-tr="asistan / yardımcı">assistant</span> for two years.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Why do you want to work for our company?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I love your <span class="vocab" data-tr="ürünler">products</span>, and I want to <span class="vocab" data-tr="öğrenmek">learn</span> more.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That's great. Are you good at working with people?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes, I'm very <span class="vocab" data-tr="arkadaş canlısı">friendly</span> and I like <span class="vocab" data-tr="yardım etmek">helping</span> customers.</p>
                `
            },
            { 
                id: 11, 
                title: "Talking about Skills", 
                audioFile: "11_Job_Interviews_Talking_about_Skills.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Do you know how to <span class="vocab" data-tr="kullanmak">use</span> this computer <span class="vocab" data-tr="program">program</span>?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes, I used it every day at my old job.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Excellent. Sometimes this job is very <span class="vocab" data-tr="stresli">stressful</span>.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I don't mind stress. I stay <span class="vocab" data-tr="sakin">calm</span> and drink water.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Good. We need someone who works <span class="vocab" data-tr="hızlı">fast</span>.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I'm a fast worker, but I also check my work <span class="vocab" data-tr="dikkatlice">carefully</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That's <span class="vocab" data-tr="kesinlikle">exactly</span> what we need here.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I'm <span class="vocab" data-tr="memnun">glad</span> to hear that.</p>
                `
            },
            { 
                id: 12, 
                title: "Asking Questions", 
                audioFile: "12_Day-to-Day_Meetings_&_Planning_Asking_Questions.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Do you have any questions for me?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes. What time does the office <span class="vocab" data-tr="açmak">open</span>?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We open at 8:30 in the morning and <span class="vocab" data-tr="kapatmak">close</span> at 5:00.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Do people work here on the <span class="vocab" data-tr="hafta sonları">weekends</span>?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> No, we don't work on Saturdays or Sundays.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> That sounds <span class="vocab" data-tr="mükemmel">perfect</span>. When will you <span class="vocab" data-tr="karar vermek">decide</span>?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We'll call you on Friday.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Thank you for your time today.</p>
                `
            }
        ]
    },
    {
        category: "5. Day-to-Day Meetings & Planning",
        situations: [
            { 
                id: 13, 
                title: "Morning Status Update", 
                audioFile: "13_Day-to-Day_Meetings_&_Planning_Morning_Status_Update.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Good morning, team. What are we <span class="vocab" data-tr="çalışmak">working</span> on today?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I am <span class="vocab" data-tr="kontrol etmek">checking</span> the new car <span class="vocab" data-tr="parçalar">parts</span> from the factory.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Are there any problems with the parts?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> No, they look good. The machines are working <span class="vocab" data-tr="kusursuzca">perfectly</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is great news. When will they be <span class="vocab" data-tr="hazır">ready</span> to <span class="vocab" data-tr="göndermek">ship</span>?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> They will be ready by three o'clock this afternoon.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Excellent. Please send me a <span class="vocab" data-tr="mesaj">message</span> when they leave.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will. I'll email you the tracking number, too.</p>
                `
            },
            { 
                id: 14, 
                title: "Brainstorming Ideas", 
                audioFile: "14_Day-to-Day_Meetings_&_Planning_Brainstorming_Ideas.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Leader:</span> We need a new name for our new software app.</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> How about "Fast Connect"? It sounds <span class="vocab" data-tr="hızlı">quick</span> and <span class="vocab" data-tr="kolay">easy</span>.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> I like it, but maybe it is too <span class="vocab" data-tr="yaygın">common</span>.</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> You're right. What if we call it "Smart Sync"?</p>
                    <p class="line"><span class="speaker-A">Leader:</span> "Smart Sync" is better. It sounds very <span class="vocab" data-tr="modern">modern</span>.</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> Yes, and it <span class="vocab" data-tr="açıklar">explains</span> what the app does.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> Let's write that down. Do you have any other <span class="vocab" data-tr="fikirler">ideas</span>?</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> Not yet, but I'll <span class="vocab" data-tr="düşünmek">think</span> about it more today.</p>
                `
            },
            { 
                id: 15, 
                title: "Project Kickoff", 
                audioFile: "15_Sales_&_Client_Relations_Project_Kickoff.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Welcome to the new marketing project, everyone.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Thank you. What is our main <span class="vocab" data-tr="hedef">goal</span> for this month?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need to <span class="vocab" data-tr="tasarlamak">design</span> a new website for our clients.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Do we have photos to use for the homepage?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, the photographers <span class="vocab" data-tr="bitirdi">finished</span> their work yesterday.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> <span class="vocab" data-tr="mükemmel">Perfect</span>. I can <span class="vocab" data-tr="başlamak">start</span> making the design tomorrow morning.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Great. We will meet again on Friday to see your work.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Sounds good. I'll have the first <span class="vocab" data-tr="taslak">draft</span> ready by then.</p>
                `
            }
        ]
    },
    {
        category: "6. Sales & Client Relations",
        situations: [
            { 
                id: 16, 
                title: "The Sales Pitch", 
                audioFile: "16_Sales_&_Client_Relations_The_Sales_Pitch.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Salesperson:</span> Thank you for meeting me. We make <span class="vocab" data-tr="güçlü">strong</span> materials.</p>
                    <p class="line"><span class="speaker-B">Client:</span> I saw your catalog. Your products look <span class="vocab" data-tr="yüksek kalite">high quality</span>.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Yes, and we currently export to many different countries.</p>
                    <p class="line"><span class="speaker-B">Client:</span> That is <span class="vocab" data-tr="etkileyici">impressive</span>. Can you send a <span class="vocab" data-tr="büyük">large</span> order?</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Absolutely. We can <span class="vocab" data-tr="teslim etmek">deliver</span> it in two weeks.</p>
                    <p class="line"><span class="speaker-B">Client:</span> What happens if the delivery is <span class="vocab" data-tr="geç">late</span>?</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> We offer a <span class="vocab" data-tr="indirim">discount</span> if it doesn't arrive on time.</p>
                    <p class="line"><span class="speaker-B">Client:</span> That sounds <span class="vocab" data-tr="adil">fair</span>. Let's talk about the price.</p>
                `
            },
            { 
                id: 17, 
                title: "Handling a Complaint", 
                audioFile: "17_Sales_&_Client_Relations_Handling_a_Complaint.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Customer Service:</span> Hello, how can I help you today?</p>
                    <p class="line"><span class="speaker-B">Customer:</span> I am <span class="vocab" data-tr="üzgün">upset</span>. My order arrived, but the color is <span class="vocab" data-tr="yanlış">wrong</span>.</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> I am so sorry about that. What color did you order?</p>
                    <p class="line"><span class="speaker-B">Customer:</span> I ordered blue, but you sent me black.</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> That is our <span class="vocab" data-tr="hata">mistake</span>. I will send the blue one today.</p>
                    <p class="line"><span class="speaker-B">Customer:</span> Do I have to <span class="vocab" data-tr="ödemek">pay</span> to send the black one back?</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> No, we'll pay for the <span class="vocab" data-tr="iade">return</span> shipping.</p>
                    <p class="line"><span class="speaker-B">Customer:</span> Thank you. I <span class="vocab" data-tr="takdir etmek">appreciate</span> your <span class="vocab" data-tr="hızlı">quick</span> help.</p>
                `
            },
            { 
                id: 18, 
                title: "Closing a Deal", 
                audioFile: "18_Finance_&_Legal_Closing_a_Deal.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Salesperson:</span> Are you <span class="vocab" data-tr="mutlu">happy</span> with the <span class="vocab" data-tr="son">final</span> contract?</p>
                    <p class="line"><span class="speaker-B">Client:</span> Yes, the price and the delivery dates look good.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Wonderful. I just need your <span class="vocab" data-tr="imza">signature</span> on the last page.</p>
                    <p class="line"><span class="speaker-B">Client:</span> Here you go. I signed it.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Thank you very much. We're <span class="vocab" data-tr="heyecanlı">excited</span> to work with you.</p>
                    <p class="line"><span class="speaker-B">Client:</span> We're excited, too. When do we <span class="vocab" data-tr="başlamak">begin</span> the first project?</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Our team will call you on Monday morning to begin.</p>
                    <p class="line"><span class="speaker-B">Client:</span> Have a great weekend until then.</p>
                `
            }
        ]
    },
    {
        category: "7. Finance & Legal",
        situations: [
            { 
                id: 19, 
                title: "Asking for a Budget", 
                audioFile: "19_Finance_&_Legal_Asking_for_a_Budget.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> I need more money for my department this year.</p>
                    <p class="line"><span class="speaker-B">Director:</span> Why do you need a <span class="vocab" data-tr="daha büyük">bigger</span> budget?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need to buy three new computers for the new staff.</p>
                    <p class="line"><span class="speaker-B">Director:</span> Computers are <span class="vocab" data-tr="pahalı">expensive</span>. Can they <span class="vocab" data-tr="paylaşmak">share</span> the old ones?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> No, they need their <span class="vocab" data-tr="kendi">own</span> computers to work fast.</p>
                    <p class="line"><span class="speaker-B">Director:</span> Okay, I <span class="vocab" data-tr="anlamak">understand</span>. How much money do you need?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I need about three thousand dollars.</p>
                    <p class="line"><span class="speaker-B">Director:</span> I'll check the company bank account and let you know.</p>
                `
            },
            { 
                id: 20, 
                title: "Contract Review", 
                audioFile: "20_Finance_&_Legal_Contract_Review.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Lawyer:</span> I <span class="vocab" data-tr="okudu">read</span> the new contract from the supplier.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> Did you find any problems with it?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> Yes. They changed the rules about <span class="vocab" data-tr="bitirme / sonlandırma">ending</span> the <span class="vocab" data-tr="anlaşma">agreement</span>.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> What do the new rules say?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> They say we must pay a <span class="vocab" data-tr="ücret / ceza">fee</span> if we <span class="vocab" data-tr="iptal etmek">cancel</span> <span class="vocab" data-tr="erken">early</span>.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> I don't <span class="vocab" data-tr="katılmak">agree</span> with that. Can we <span class="vocab" data-tr="kaldırmak">remove</span> that rule?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> I'll call their lawyer and ask them to change it.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> Please do. We shouldn't sign it like this.</p>
                `
            },
            { 
                id: 21, 
                title: "An Office Audit", 
                audioFile: "21_Operations_&_Quality_Control_An_Office_Audit.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Auditor:</span> Hello, I am here to check your financial <span class="vocab" data-tr="kayıtlar">records</span>.</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> Welcome. All of our papers are in these folders.</p>
                    <p class="line"><span class="speaker-A">Auditor:</span> Can I see the <span class="vocab" data-tr="fişler / faturalar">receipts</span> for the last three months?</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> Yes, they're in the blue folder on the desk.</p>
                    <p class="line"><span class="speaker-A">Auditor:</span> Thank you. I also need to see the <span class="vocab" data-tr="maaş bordrosu">payroll</span> documents.</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> I can <span class="vocab" data-tr="yazdırmak">print</span> those from the computer for you right now.</p>
                    <p class="line"><span class="speaker-A">Auditor:</span> Perfect. This shouldn't take more than two hours.</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> Take your time. Let me know if you have <span class="vocab" data-tr="sorular">questions</span>.</p>
                `
            }
        ]
    },
    {
        category: "8. Operations & Quality Control",
        situations: [
            { 
                id: 22, 
                title: "A Broken Machine", 
                audioFile: "22_Operations_&_Quality_Control_A_Broken_Machine.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> The big printer in the office is <span class="vocab" data-tr="bozuk">broken</span> again.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Oh no. What is wrong with it this time?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> It is making a <span class="vocab" data-tr="yüksek sesli">loud</span> noise and the paper is <span class="vocab" data-tr="sıkışmış">stuck</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Did you turn it off and <span class="vocab" data-tr="fişini çekmek">unplug</span> it?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Yes, I turned it off right away so it doesn't get <span class="vocab" data-tr="daha kötü">worse</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Good job. Please call the repair company.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I have their phone number. I will call them right now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Thank you. We need it <span class="vocab" data-tr="tamir edilmiş">fixed</span> before tomorrow morning.</p>
                `
            },
            { 
                id: 23, 
                title: "Checking the Products", 
                audioFile: "23_Operations_&_Quality_Control_Checking_the_Products.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Inspector:</span> I <span class="vocab" data-tr="kontrol etti">checked</span> the new shirts from the factory.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Did you find any problems with them?</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> Yes, the stitching on these five shirts is very <span class="vocab" data-tr="kötü">bad</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Let me see. You are right, the thread is <span class="vocab" data-tr="gevşek">loose</span>.</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> What should we do with these broken items?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Put them in the red box. We cannot <span class="vocab" data-tr="satmak">sell</span> them to customers.</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> Okay. I will check the <span class="vocab" data-tr="geri kalan">rest</span> of the boxes now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Please look very <span class="vocab" data-tr="yakından">closely</span>. Good quality is <span class="vocab" data-tr="önemli">important</span> for us.</p>
                `
            },
            { 
                id: 24, 
                title: "Talking to a Supplier", 
                audioFile: "24_Networking_&_Office_Chat_Talking_to_a_Supplier.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Hello, I need to talk about our last order.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> Hi! Do you need to order more materials?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, but your new prices are very <span class="vocab" data-tr="yüksek">high</span> for us.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> I am sorry, but the cost of <span class="vocab" data-tr="taşımacılık / nakliye">transportation</span> went up recently.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Can you give us a small <span class="vocab" data-tr="indirim">discount</span>? We buy a lot from you.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> If you buy a <span class="vocab" data-tr="büyük miktar">large amount</span>, I can give you a 5% discount.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That works for me. We need it for our <span class="vocab" data-tr="ihracat">export</span> orders.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> Perfect. I will send the new contract this afternoon.</p>
                `
            }
        ]
    },
    {
        category: "9. Networking & Office Chat",
        situations: [
            { 
                id: 25, 
                title: "Meeting at a Conference", 
                audioFile: "25_Networking_&_Office_Chat_Meeting_at_a_Conference.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Person A:</span> Hello, my name is David. I work at Tech Plus.</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Hi David, I'm Lisa. I am a software <span class="vocab" data-tr="mühendis">engineer</span>.</p>
                    <p class="line"><span class="speaker-A">Person A:</span> Nice to meet you, Lisa. Are you <span class="vocab" data-tr="keyif almak">enjoying</span> the conference?</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Yes, the speakers are very <span class="vocab" data-tr="ilginç">interesting</span>. How about you?</p>
                    <p class="line"><span class="speaker-A">Person A:</span> I like it too. I am <span class="vocab" data-tr="öğrenmek">learning</span> a lot of new things today.</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Me too. Let's <span class="vocab" data-tr="bağlantı kurmak">connect</span> on LinkedIn later.</p>
                    <p class="line"><span class="speaker-A">Person A:</span> That is a great idea. Here is my business card.</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Thank you. I hope you enjoy the rest of the day.</p>
                `
            },
            { 
                id: 26, 
                title: "Talking about the Weekend", 
                audioFile: "26_Networking_&_Office_Chat_Talking_about_the_Weekend.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Coworker 1:</span> Good morning! How was your weekend?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> It was <span class="vocab" data-tr="harika">great</span>, thank you. I went to the park.</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> That sounds fun. What did you do there?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> I played football all afternoon with my family.</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> Did your team <span class="vocab" data-tr="kazanmak">win</span> the game?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> No, the other team was too <span class="vocab" data-tr="hızlı">fast</span>! How was your weekend?</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> It was <span class="vocab" data-tr="sessiz">quiet</span>. I <span class="vocab" data-tr="kaldı">stayed</span> home and read a book.</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> Sometimes a quiet weekend is exactly what you need.</p>
                `
            },
            { 
                id: 27, 
                title: "Welcoming a Visitor", 
                audioFile: "27_Crisis_and_Big_Changes_Welcoming_a_Visitor.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Receptionist:</span> Welcome to the office. Can I help you?</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> Yes, I have a <span class="vocab" data-tr="toplantı">meeting</span> with Mr. Smith at two o'clock.</p>
                    <p class="line"><span class="speaker-A">Receptionist:</span> Let me check his <span class="vocab" data-tr="program">schedule</span>. What is your name, please?</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> My name is Anna Lee. I am from the marketing agency.</p>
                    <p class="line"><span class="speaker-A">Receptionist:</span> Yes, here is your name. Please <span class="vocab" data-tr="imzalamak">sign</span> this visitor book.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> Okay, I signed it. Where should I <span class="vocab" data-tr="beklemek">wait</span>?</p>
                    <p class="line"><span class="speaker-A">Receptionist:</span> You can sit on the sofa. I will call him right now.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> Thank you very much for your help.</p>
                `
            }
        ]
    },
    {
        category: "10. Crisis and Big Changes",
        situations: [
            { 
                id: 28, 
                title: "A Bad Review", 
                audioFile: "28_Crisis_and_Big_Changes_A_Bad_Review.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Boss:</span> Did you see the bad <span class="vocab" data-tr="yorum / değerlendirme">review</span> on the internet?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, the customer said our product arrived <span class="vocab" data-tr="kırık">broken</span>.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> We need to <span class="vocab" data-tr="cevap vermek">answer</span> them quickly. What should we say?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We should say we are sorry and ask them to call us.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Good idea. We also need to talk to the shipping team today.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will tell them to use more <span class="vocab" data-tr="dolgu / destek">padding</span> in the boxes.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Write the message for the internet and show it to me first.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will have it ready for you to read in ten minutes.</p>
                `
            },
            { 
                id: 29, 
                title: "Moving to a New Office", 
                audioFile: "29_Crisis_and_Big_Changes_Moving_to_a_New_Office.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> We are <span class="vocab" data-tr="taşınmak">moving</span> to a new office building next month.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Really? Where is the new building <span class="vocab" data-tr="konumlanmış">located</span>?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> It is in the city center. It is much <span class="vocab" data-tr="daha büyük">bigger</span> and <span class="vocab" data-tr="daha aydınlık">brighter</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Will we have our own desks or <span class="vocab" data-tr="paylaşmak">share</span> them?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Everyone will have their own desk near a window.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> That is great news. When do we need to pack our things?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We will give you <span class="vocab" data-tr="boş">empty</span> boxes next Friday afternoon.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Okay, I will start <span class="vocab" data-tr="çöpe atmak">throwing away</span> old papers today.</p>
                `
            },
            { 
                id: 30, 
                title: "A Computer Problem", 
                audioFile: "30_Crisis_and_Big_Changes_A_Computer_Problem.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">IT Worker:</span> Please stop working and turn off your computer <span class="vocab" data-tr="derhal">immediately</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Why? What is <span class="vocab" data-tr="oluyor">happening</span> with the computers?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> We have a computer <span class="vocab" data-tr="virüs">virus</span>. It is trying to <span class="vocab" data-tr="silmek">delete</span> our files.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Oh no. Are the customer passwords <span class="vocab" data-tr="güvenli">safe</span> right now?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> I don't know yet. I am trying to stop the virus now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Do we need to call the boss and tell him?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> Not yet. Let me <span class="vocab" data-tr="düzeltmek / tamir etmek">fix</span> the security wall first.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Okay, please work fast. Keep me updated.</p>
                `
            }
        ]
    },{
        category: "11. Marketing and Advertising",
        situations: [
            { 
                id: 31, 
                title: "Planning an Ad", 
                audioFile: "31_Marketing_and_Advertising_Planning_an_Ad.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> We need a new <span class="vocab" data-tr="reklam">advertisement</span> for the internet.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Should we <span class="vocab" data-tr="yapmak / hazırlamak">make</span> a video or use a picture?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> A <span class="vocab" data-tr="kısa">short</span> video is <span class="vocab" data-tr="daha iyi">better</span> for social media.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Okay. What is the main <span class="vocab" data-tr="mesaj">message</span> of the video?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We want to <span class="vocab" data-tr="göstermek">show</span> that our service is <span class="vocab" data-tr="hızlı">fast</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I can <span class="vocab" data-tr="yazmak">write</span> a <span class="vocab" data-tr="senaryo / metin">script</span> for a 15-second video.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That sounds <span class="vocab" data-tr="harika">great</span>. Please show it to me tomorrow.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will <span class="vocab" data-tr="bitirmek">finish</span> it before lunch.</p>
                `
            },
            { 
                id: 32, 
                title: "Talking about Social Media", 
                audioFile: "32_Marketing_and_Advertising_Talking_about_Social_Media.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> We need more people to <span class="vocab" data-tr="bakmak">look at</span> our company page.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> We should <span class="vocab" data-tr="paylaşmak">post</span> photos of our team at work.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> That is a <span class="vocab" data-tr="iyi">good</span> idea. People like seeing <span class="vocab" data-tr="arkadaş canlısı">friendly</span> faces.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, and we can <span class="vocab" data-tr="sormak">ask</span> questions to <span class="vocab" data-tr="başlatmak">start</span> a <span class="vocab" data-tr="sohbet">conversation</span>.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> How many times a week should we post?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Let's <span class="vocab" data-tr="denemek">try</span> posting three times a week on Monday, Wednesday, and Friday.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Okay. I will <span class="vocab" data-tr="çekmek (fotoğraf)">take</span> some photos in the office today.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Perfect. <span class="vocab" data-tr="göndermek">Send</span> them to me and I will write the text.</p>
                `
            },
            { 
                id: 33, 
                title: "A New Product Name", 
                audioFile: "33_Business_Travel_A_New_Product_Name.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager 1:</span> What should we <span class="vocab" data-tr="adlandırmak / çağırmak">call</span> our new health drink?</p>
                    <p class="line"><span class="speaker-B">Manager 2:</span> I <span class="vocab" data-tr="düşünmek">think</span> "Morning Energy" is a good name.</p>
                    <p class="line"><span class="speaker-A">Manager 1:</span> I like it, but another company <span class="vocab" data-tr="zaten / çoktan">already</span> <span class="vocab" data-tr="kullanmak">uses</span> that name.</p>
                    <p class="line"><span class="speaker-B">Manager 2:</span> Oh, I see. What about "Fresh Start"?</p>
                    <p class="line"><span class="speaker-A">Manager 1:</span> "Fresh Start" is nice and <span class="vocab" data-tr="kolay">easy</span> to <span class="vocab" data-tr="hatırlamak">remember</span>.</p>
                    <p class="line"><span class="speaker-B">Manager 2:</span> Should we use green letters on the bottle?</p>
                    <p class="line"><span class="speaker-A">Manager 1:</span> Yes, green makes people think of <span class="vocab" data-tr="sağlıklı">healthy</span> things.</p>
                    <p class="line"><span class="speaker-B">Manager 2:</span> I will <span class="vocab" data-tr="söylemek">tell</span> the <span class="vocab" data-tr="tasarım">design</span> team to make a sample.</p>
                `
            }
        ]
    },
    {
        category: "12. Business Travel",
        situations: [
            { 
                id: 34, 
                title: "Booking a Flight", 
                audioFile: "34_Business_Travel_Booking_a_Flight.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I need to <span class="vocab" data-tr="uçmak">fly</span> to London next week for the <span class="vocab" data-tr="büyük">big</span> meeting.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Do you want to <span class="vocab" data-tr="ayrılmak / gitmek">leave</span> on Monday morning or Sunday night?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Monday morning is better. I don't want to fly on the weekend.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Okay. I <span class="vocab" data-tr="buldu">found</span> a <span class="vocab" data-tr="doğrudan / aktarmasız">direct</span> <span class="vocab" data-tr="uçuş">flight</span> at 8:00 AM.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> That is <span class="vocab" data-tr="mükemmel">perfect</span>. Which airline is it?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> It is British Airways. You will <span class="vocab" data-tr="varmak">arrive</span> at 10:00 AM.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Great. Please <span class="vocab" data-tr="yer ayırtmak">book</span> the ticket and <span class="vocab" data-tr="seçmek">choose</span> a window seat for me.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> I just <span class="vocab" data-tr="satın aldı">bought</span> it. I will email the ticket to you now.</p>
                `
            },
            { 
                id: 35, 
                title: "Checking into a Hotel", 
                audioFile: "35_Business_Travel_Checking_into_a_Hotel.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Clerk:</span> Welcome to the Grand Hotel. How can I <span class="vocab" data-tr="yardım etmek">help</span> you?</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Hello, I have a <span class="vocab" data-tr="rezervasyon">reservation</span> for three nights. My name is Lee.</p>
                    <p class="line"><span class="speaker-A">Clerk:</span> Let me <span class="vocab" data-tr="kontrol etmek">check</span> the computer. Yes, Mr. Lee, a <span class="vocab" data-tr="tek kişilik">single</span> room.</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Can I <span class="vocab" data-tr="almak">get</span> a room on a <span class="vocab" data-tr="yüksek">high</span> floor, please?</p>
                    <p class="line"><span class="speaker-A">Clerk:</span> Let me <span class="vocab" data-tr="görmek / bakmak">see</span>. Yes, I can put you on the 10th floor.</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Thank you. What time is <span class="vocab" data-tr="kahvaltı">breakfast</span> in the morning?</p>
                    <p class="line"><span class="speaker-A">Clerk:</span> Breakfast is from 6:30 to 9:30 in the restaurant.</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Perfect. I will <span class="vocab" data-tr="ihtiyacı olmak">need</span> an alarm call at 6:00, please.</p>
                `
            },
            { 
                id: 36, 
                title: "Taking a Taxi", 
                audioFile: "36_Technology_and_Software_Support_Taking_a_Taxi.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Driver:</span> Good morning! Where are we <span class="vocab" data-tr="gitmek">going</span> today?</p>
                    <p class="line"><span class="speaker-B">Passenger:</span> Good morning. Please <span class="vocab" data-tr="götürmek">take</span> me to the train station.</p>
                    <p class="line"><span class="speaker-A">Driver:</span> The <span class="vocab" data-tr="trafik">traffic</span> is very <span class="vocab" data-tr="kötü">bad</span> right now. Are you in a <span class="vocab" data-tr="acele">hurry</span>?</p>
                    <p class="line"><span class="speaker-B">Passenger:</span> Yes, my train leaves in forty minutes.</p>
                    <p class="line"><span class="speaker-A">Driver:</span> I will take a <span class="vocab" data-tr="farklı">different</span> road to <span class="vocab" data-tr="kaçınmak">avoid</span> the traffic.</p>
                    <p class="line"><span class="speaker-B">Passenger:</span> Thank you. How much will it <span class="vocab" data-tr="mal olmak / tutmak">cost</span>?</p>
                    <p class="line"><span class="speaker-A">Driver:</span> It will be about twenty dollars.</p>
                    <p class="line"><span class="speaker-B">Passenger:</span> That is fine. Here is the money. Please <span class="vocab" data-tr="saklamak / tutmak">keep</span> the <span class="vocab" data-tr="para üstü">change</span>.</p>
                `
            }
        ]
    },
    {
        category: "13. Technology and Software Support",
        situations: [
            { 
                id: 37, 
                title: "A Forgotten Password", 
                audioFile: "37_Technology_and_Software_Support_A_Forgotten_Password.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">IT Worker:</span> IT Help Desk, this is Sarah <span class="vocab" data-tr="konuşuyor">speaking</span>.</p>
                    <p class="line"><span class="speaker-B">User:</span> Hi Sarah, I can't <span class="vocab" data-tr="açmak">open</span> my email. I <span class="vocab" data-tr="unuttum">forgot</span> my <span class="vocab" data-tr="şifre">password</span>.</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> I can help with that. What is your employee number?</p>
                    <p class="line"><span class="speaker-B">User:</span> My number is 4-5-8-2.</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> Thank you. I am <span class="vocab" data-tr="gönderiyorum">sending</span> a <span class="vocab" data-tr="gizli">secret</span> code to your phone now.</p>
                    <p class="line"><span class="speaker-B">User:</span> Okay, I <span class="vocab" data-tr="aldım">got</span> a text message with the code.</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> Please <span class="vocab" data-tr="yazmak (klavyede)">type</span> that code into the computer to make a new password.</p>
                    <p class="line"><span class="speaker-B">User:</span> It <span class="vocab" data-tr="işe yaradı / çalıştı">worked</span>! Thank you very much for your help.</p>
                `
            },
            { 
                id: 38, 
                title: "Learning a New Program", 
                audioFile: "38_Technology_and_Software_Support_Learning_a_New_Program.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> Did you <span class="vocab" data-tr="kullanmak">use</span> the new sales <span class="vocab" data-tr="yazılım">software</span> yet?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, I <span class="vocab" data-tr="denedim">tried</span> it yesterday, but it is <span class="vocab" data-tr="zor">difficult</span>.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> I think it is <span class="vocab" data-tr="daha hızlı">faster</span> than the <span class="vocab" data-tr="eski">old</span> program.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Maybe, but I don't know how to <span class="vocab" data-tr="bulmak">find</span> my old customers.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> You have to <span class="vocab" data-tr="tıklamak">click</span> the star <span class="vocab" data-tr="simge">icon</span> on the left side.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Oh, I <span class="vocab" data-tr="görmek / anlamak">see</span> it now! That is very easy.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> There is a training video on the company website, too.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I will <span class="vocab" data-tr="izlemek">watch</span> it this afternoon. Thanks for the <span class="vocab" data-tr="ipucu">tip</span>.</p>
                `
            },
            { 
                id: 39, 
                title: "Buying New Equipment", 
                audioFile: "39_Time_Management_&_Deadlines_Buying_New_Equipment.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Boss:</span> Our computers are very <span class="vocab" data-tr="yavaş">slow</span>. We need to <span class="vocab" data-tr="satın almak">buy</span> new ones.</p>
                    <p class="line"><span class="speaker-B">IT Worker:</span> I <span class="vocab" data-tr="katılıyorum">agree</span>. The design team needs faster machines.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Can you find three good <span class="vocab" data-tr="seçenekler">options</span> and show me the prices?</p>
                    <p class="line"><span class="speaker-B">IT Worker:</span> Yes. Do you <span class="vocab" data-tr="tercih etmek">prefer</span> laptops or desktop computers?</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Let's buy laptops. People can <span class="vocab" data-tr="götürmek / almak">take</span> them to meetings.</p>
                    <p class="line"><span class="speaker-B">IT Worker:</span> Good idea. I will send you a list of prices by tomorrow.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Please <span class="vocab" data-tr="emin olmak">make sure</span> they have a lot of <span class="vocab" data-tr="hafıza">memory</span>.</p>
                    <p class="line"><span class="speaker-B">IT Worker:</span> Of course. I will <span class="vocab" data-tr="seçmek">choose</span> the best models for our work.</p>
                `
            }
        ]
    },
    {
        category: "14. Time Management & Deadlines",
        situations: [
            { 
                id: 40, 
                title: "A Fast Deadline", 
                audioFile: "40_Time_Management_&_Deadlines_A_Fast_Deadline.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> We need to <span class="vocab" data-tr="bitirmek">finish</span> the new project by Friday.</p>
                    <p class="line"><span class="speaker-B">Developer:</span> Friday? That is very <span class="vocab" data-tr="yakında / erken">soon</span>. I hadn't finished the code yet.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I know, but the client <span class="vocab" data-tr="istiyor">wants</span> to see it before the weekend.</p>
                    <p class="line"><span class="speaker-B">Developer:</span> Okay. I'll need to work <span class="vocab" data-tr="geç saatlere kadar">late</span> tonight and tomorrow.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Thank you. I'll buy you dinner if you <span class="vocab" data-tr="kalmak">stay</span> late.</p>
                    <p class="line"><span class="speaker-B">Developer:</span> That sounds good. I'd like a <span class="vocab" data-tr="büyük">large</span> salad, please.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> No problem at all. I'll <span class="vocab" data-tr="sipariş vermek">order</span> food for you.</p>
                    <p class="line"><span class="speaker-B">Developer:</span> Perfect. Let's <span class="vocab" data-tr="geri dönmek">get back</span> to work now.</p>
                `
            },
            { 
                id: 41, 
                title: "Asking for More Time", 
                audioFile: "41_Time_Management_&_Deadlines_Asking_for_More_Time.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Did you finish the monthly sales report?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> No, I haven't. I need a little more time, please.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> When will it be <span class="vocab" data-tr="hazır">ready</span>? The boss is <span class="vocab" data-tr="soruyor / istiyor">asking</span> for it.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I can <span class="vocab" data-tr="vermek">give</span> it to you tomorrow morning at nine o'clock.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Why is it <span class="vocab" data-tr="geç">late</span> this month?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> The computer system was <span class="vocab" data-tr="bozuk">broken</span> yesterday afternoon.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I understand. Please don't be late tomorrow morning.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I <span class="vocab" data-tr="söz vermek">promise</span> it'll be on your desk first thing.</p>
                `
            },
            { 
                id: 42, 
                title: "Scheduling a Meeting", 
                audioFile: "42_Office_Facilities_&_Supplies_Scheduling_a_Meeting.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> We need to <span class="vocab" data-tr="yapmak (toplantı vb.)">have</span> a meeting about the new project.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Sure. When are you <span class="vocab" data-tr="müsait">free</span> to talk?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> I'm free on Wednesday afternoon at two o'clock.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I have another meeting then. How about Thursday?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Thursday morning <span class="vocab" data-tr="uygun">works</span> for me. Is ten o'clock okay?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, ten is great. Should I <span class="vocab" data-tr="davet etmek">invite</span> the marketing team?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, please ask them to <span class="vocab" data-tr="katılmak">join</span> us.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I'll send everyone an email invitation right now.</p>
                `
            }
        ]
    },
    {
        category: "15. Office Facilities & Supplies",
        situations: [
            { 
                id: 43, 
                title: "Ordering Office Supplies", 
                audioFile: "43_Office_Facilities_&_Supplies_Ordering_Office_Supplies.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> We don't have any more printer paper in the office.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Oh no. I'll <span class="vocab" data-tr="sipariş vermek">order</span> some more today.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> We also need some new blue pens and sticky notes.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I'll <span class="vocab" data-tr="eklemek">add</span> them to the list. Do we need anything else?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, the kitchen is <span class="vocab" data-tr="bitmiş / kalmamış">out of</span> coffee beans.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> That is a big <span class="vocab" data-tr="acil durum">emergency</span>! I'll order coffee <span class="vocab" data-tr="hemen">right away</span>.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> When will the <span class="vocab" data-tr="teslimat">delivery</span> <span class="vocab" data-tr="varmak / ulaşmak">arrive</span>?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> It usually <span class="vocab" data-tr="sürmek / almak (zaman)">takes</span> two days. We'll have it by Wednesday.</p>
                `
            },
            { 
                id: 44, 
                title: "A Cold Office", 
                audioFile: "44_Office_Facilities_&_Supplies_A_Cold_Office.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> It's very <span class="vocab" data-tr="soğuk">cold</span> in the office today.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I agree. I can't <span class="vocab" data-tr="hissetmek">feel</span> my fingers while I'm typing.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Can we <span class="vocab" data-tr="açmak (cihaz)">turn on</span> the heating?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I <span class="vocab" data-tr="denedim">tried</span>, but the <span class="vocab" data-tr="ısıtıcı">heater</span> isn't working.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> We should call the building manager.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I already called him. He is <span class="vocab" data-tr="geliyor">coming</span> in ten minutes.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Good. I hope he <span class="vocab" data-tr="tamir etmek">fixes</span> it fast.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Me too. I'll <span class="vocab" data-tr="giymek">wear</span> my coat until then.</p>
                `
            },
            { 
                id: 45, 
                title: "Reserving a Room", 
                audioFile: "45_Travel_Directions_&_Branch_Offices_Reserving_a_Room.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I need a <span class="vocab" data-tr="sessiz">quiet</span> room for a phone call at three o'clock.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Let me check the schedule. Room A is <span class="vocab" data-tr="boş">empty</span>.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Is that the room with the <span class="vocab" data-tr="büyük">big</span> television?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Yes, it is. Do you need to <span class="vocab" data-tr="kullanmak">use</span> the television?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> No, I <span class="vocab" data-tr="sadece">only</span> need a phone and a quiet space.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Okay. I'll <span class="vocab" data-tr="yazmak">write</span> your name down for Room A at three.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. How long can I use it?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> You can have it for one <span class="vocab" data-tr="tam">full</span> hour.</p>
                `
            }
        ]
    },
    {
        category: "16. Travel Directions & Branch Offices",
        situations: [
            { 
                id: 46, 
                title: "Traveling to a New Office", 
                audioFile: "46_Travel_Directions_&_Branch_Offices_Traveling_to_a_New_Office.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Are you <span class="vocab" data-tr="hazır">ready</span> for your business <span class="vocab" data-tr="gezi / seyahat">trip</span> next week?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, I am. I'm <span class="vocab" data-tr="ziyaret ediyorum">visiting</span> our new branch office.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is <span class="vocab" data-tr="heyecan verici">exciting</span>. How are you getting there?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I'm taking a flight first, and then I'll <span class="vocab" data-tr="kiralamak">rent</span> a car.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> <span class="vocab" data-tr="kullanmak (araç)">Drive</span> <span class="vocab" data-tr="güvenli bir şekilde">safely</span>. The roads there can be <span class="vocab" data-tr="yoğun">busy</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will. I have a good map on my phone.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Take some photos of the new office for us.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I <span class="vocab" data-tr="kesinlikle">definitely</span> will. I'll send them to the team chat.</p>
                `
            },
            { 
                id: 47, 
                title: "Asking for Directions", 
                audioFile: "47_Travel_Directions_&_Branch_Offices_Asking_for_Directions.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Visitor:</span> Excuse me, how do I <span class="vocab" data-tr="varmak / ulaşmak">get</span> to the Coach Station from here?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> <span class="vocab" data-tr="yürümek">Walk</span> <span class="vocab" data-tr="düz">straight</span> down this street for five minutes.</p>
                    <p class="line"><span class="speaker-A">Visitor:</span> Okay, straight down this street. Then what?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> <span class="vocab" data-tr="durmak">Stop</span> when you <span class="vocab" data-tr="görmek">see</span> the big bank at the Crossroads.</p>
                    <p class="line"><span class="speaker-A">Visitor:</span> The bank at the Crossroads. Got it.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> <span class="vocab" data-tr="dönmek">Turn</span> left there, and the Coach Station is on your right.</p>
                    <p class="line"><span class="speaker-A">Visitor:</span> Thank you so much for your help.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> You're welcome. Have a <span class="vocab" data-tr="güvenli">safe</span> trip!</p>
                `
            },
            { 
                id: 48, 
                title: "Meeting a Client", 
                audioFile: "48_Presentations_and_Public_Speaking_Meeting_a_Client.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Host:</span> Welcome to the city! Did you <span class="vocab" data-tr="bulmak">find</span> our office <span class="vocab" data-tr="kolayca">easily</span>?</p>
                    <p class="line"><span class="speaker-B">Client:</span> Yes, the taxi driver <span class="vocab" data-tr="biliyordu">knew</span> exactly where to go.</p>
                    <p class="line"><span class="speaker-A">Host:</span> Great. Would you like to get some lunch before we <span class="vocab" data-tr="başlamak">start</span>?</p>
                    <p class="line"><span class="speaker-B">Client:</span> That is a <span class="vocab" data-tr="hoş">lovely</span> idea. I'm quite <span class="vocab" data-tr="aç">hungry</span>.</p>
                    <p class="line"><span class="speaker-A">Host:</span> There's a <span class="vocab" data-tr="güzel">nice</span> restaurant near here. They have great food.</p>
                    <p class="line"><span class="speaker-B">Client:</span> That is perfect for me.</p>
                    <p class="line"><span class="speaker-A">Host:</span> Excellent. We can <span class="vocab" data-tr="konuşmak">talk</span> about the new contract while we eat.</p>
                    <p class="line"><span class="speaker-B">Client:</span> Sounds like a great plan. Let's go.</p>
                `
            }
        ]
    },
    {
        category: "17. Presentations and Public Speaking",
        situations: [
            { 
                id: 49, 
                title: "Preparing a Presentation", 
                audioFile: "49_Presentations_and_Public_Speaking_Preparing_a_Presentation.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Are you <span class="vocab" data-tr="hazır">ready</span> for your <span class="vocab" data-tr="sunum">presentation</span> tomorrow?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Not yet. I hadn't <span class="vocab" data-tr="bitirdim">finished</span> the final slide about our products.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Do you need help <span class="vocab" data-tr="bulmak">finding</span> the <span class="vocab" data-tr="doğru">right</span> pictures?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Yes, please. Can you find some good photos of the factory?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> I'll <span class="vocab" data-tr="bakmak">look</span> in the company folder right now.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Thank you. I want to <span class="vocab" data-tr="göstermek">show</span> that we have many employees.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> That is a great idea. It shows that our company is <span class="vocab" data-tr="büyüyor">growing</span>.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Yes, the new <span class="vocab" data-tr="müşteriler">clients</span> will like to see that.</p>
                `
            },
            { 
                id: 50, 
                title: "Starting a Talk", 
                audioFile: "50_Presentations_and_Public_Speaking_Starting_a_Talk.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Good morning, everyone. Thank you for <span class="vocab" data-tr="geldiğiniz">coming</span> today.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> We are <span class="vocab" data-tr="heyecanlı">excited</span> to <span class="vocab" data-tr="duymak">hear</span> about the new sales plan.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Before we <span class="vocab" data-tr="başlamak">start</span>, please <span class="vocab" data-tr="kapatmak">turn off</span> your mobile phones.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> No problem. Will we have a <span class="vocab" data-tr="kısa">short</span> break for coffee?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes, we will <span class="vocab" data-tr="durmak">stop</span> for fifteen minutes at ten o'clock.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Perfect. Do we have paper to <span class="vocab" data-tr="almak">take</span> <span class="vocab" data-tr="notlar">notes</span>?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes, there are notebooks and pens on your desks.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Thank you. We are ready to <span class="vocab" data-tr="dinlemek">listen</span> now.</p>
                `
            },
            { 
                id: 51, 
                title: "Answering Questions", 
                audioFile: "51_Customer_Support_and_Problems_Answering_Questions.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> That is the <span class="vocab" data-tr="son">end</span> of my presentation. Do you have any questions?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Yes. How much will the new software <span class="vocab" data-tr="mal olmak">cost</span>?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> It will cost five hundred dollars every month.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> That is quite <span class="vocab" data-tr="pahalı">expensive</span> for our <span class="vocab" data-tr="küçük">small</span> budget.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> It is, but it will <span class="vocab" data-tr="kurtarmak / tasarruf ettirmek">save</span> us a lot of time and work.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Does it <span class="vocab" data-tr="çalışmak">work</span> on our old office <span class="vocab" data-tr="ekipman">equipment</span>?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes, it does. You don't need to buy new equipment.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> That is good news. Thank you for <span class="vocab" data-tr="açıklamak">explaining</span>.</p>
                `
            }
        ]
    },
    {
        category: "18. Customer Support and Problems",
        situations: [
            { 
                id: 52, 
                title: "Missing Bags at the Airport", 
                audioFile: "52_Customer_Support_and_Problems_Missing_Bags_at_the_Airport.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Excuse me, I can't <span class="vocab" data-tr="bulmak">find</span> my suitcase from the flight.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> I can <span class="vocab" data-tr="yardım etmek">help</span> you. You need to <span class="vocab" data-tr="gitmek">go</span> to the <span class="vocab" data-tr="kayıp">lost</span> luggage claim.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Where is that, please?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> It is next to the exit doors, on the <span class="vocab" data-tr="sol">left</span> side.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Thank you. I hadn't <span class="vocab" data-tr="görmedim">seen</span> it when I <span class="vocab" data-tr="yürüdüm">walked</span> past.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Do you have your baggage <span class="vocab" data-tr="bilet / etiket">ticket</span> with you?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes, it is right here on my phone.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> <span class="vocab" data-tr="göstermek">Show</span> that to the staff there, and they will find your bag.</p>
                `
            },
            { 
                id: 53, 
                title: "A Broken Product", 
                audioFile: "53_Customer_Support_and_Problems_A_Broken_Product.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Hello, I <span class="vocab" data-tr="satın aldım">bought</span> a camera here yesterday, but it doesn't work.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> I am sorry to <span class="vocab" data-tr="duymak">hear</span> that. What is the problem with it?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> The screen is completely <span class="vocab" data-tr="siyah">black</span>. It won't <span class="vocab" data-tr="açılmak (cihaz)">turn on</span>.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Let me <span class="vocab" data-tr="bakmak">look</span> at it. Oh, I see. The battery space is <span class="vocab" data-tr="hasarlı">damaged</span>.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Can I get a <span class="vocab" data-tr="yeni">new</span> camera, please?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Yes, of course. We will <span class="vocab" data-tr="değiştirmek">replace</span> it right away.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Thank you very much. I need it for my class.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Here is a brand new one. Have a great day.</p>
                `
            },
            { 
                id: 54, 
                title: "Calling for Help", 
                audioFile: "54_Company_Rules_and_Time_Off_Calling_for_Help.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Thank you for <span class="vocab" data-tr="aradığınız">calling</span> Tech Support. How can I help?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> My internet is very <span class="vocab" data-tr="yavaş">slow</span> today. I can't <span class="vocab" data-tr="göndermek">send</span> my emails.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Let me <span class="vocab" data-tr="kontrol etmek">check</span> your <span class="vocab" data-tr="bağlantı">connection</span>. What is your account number?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> It is 8-9-3-4-1.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Thank you. I <span class="vocab" data-tr="görüyorum">see</span> a <span class="vocab" data-tr="küçük">small</span> problem in your neighborhood.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> When will it be <span class="vocab" data-tr="düzeltilmiş">fixed</span>? I have a lot of work to do.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Our team is <span class="vocab" data-tr="çalışıyor">working</span> on it. It will be fast again in an hour.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Okay, I will <span class="vocab" data-tr="beklemek">wait</span>. Thank you for checking.</p>
                `
            }
        ]
    },
    {
        category: "19. Company Rules and Time Off",
        situations: [
            { 
                id: 55, 
                title: "Checking the Contract", 
                audioFile: "55_Company_Rules_and_Time_Off_Checking_the_Contract.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Have you <span class="vocab" data-tr="gönderdin">sent</span> the new contract to the customer yet?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> No, the law department is still <span class="vocab" data-tr="okuyor">reading</span> it.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Why is it <span class="vocab" data-tr="alıyor / sürüyor">taking</span> so long? We need to <span class="vocab" data-tr="imzalamak">sign</span> it today.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> They <span class="vocab" data-tr="buldular">found</span> a mistake on page four and have to <span class="vocab" data-tr="düzeltmek">fix</span> it.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> What kind of mistake did they find?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> They hadn't <span class="vocab" data-tr="dahil etmiş">included</span> the new shipping rules.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Oh, that is very <span class="vocab" data-tr="önemli">important</span>. Tell them to <span class="vocab" data-tr="acele etmek">hurry</span>, please.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> I will call them right now and <span class="vocab" data-tr="sormak">ask</span> for an update.</p>
                `
            },
            { 
                id: 56, 
                title: "Asking for a Holiday", 
                audioFile: "56_Company_Rules_and_Time_Off_Asking_for_a_Holiday.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> Boss, can I <span class="vocab" data-tr="almak">take</span> a week off next month?</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Let me check the calendar. When do you <span class="vocab" data-tr="istemek">want</span> to go?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> I want to <span class="vocab" data-tr="seyahat etmek">travel</span> with my family.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> That sounds <span class="vocab" data-tr="harika">wonderful</span>. Is it the second week of the month?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes, from Monday to Friday.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> That is fine. We don't have any big meetings that week.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Thank you so much! I'll <span class="vocab" data-tr="doldurmak">fill out</span> the <span class="vocab" data-tr="tatil">holiday</span> form now.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Have a great trip. Send us some photos!</p>
                `
            },
            { 
                id: 57, 
                title: "Safety Rules", 
                audioFile: "57_Business_Dinners_and_Entertainment_Safety_Rules.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Speaker A:</span> <span class="vocab" data-tr="hatırlamak">Remember</span>, everyone must <span class="vocab" data-tr="takmak / giymek">wear</span> a hard hat in the factory.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Even if we are just <span class="vocab" data-tr="yürüyoruz">walking</span> through for a minute?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Yes. It is a <span class="vocab" data-tr="katı / kesin">strict</span> rule for your own <span class="vocab" data-tr="güvenlik">safety</span>.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> I understand. Where can I <span class="vocab" data-tr="bulmak">find</span> a hard hat?</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> There is a box of yellow hats next to the main door.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> Okay. I hadn't <span class="vocab" data-tr="fark etmemiştim">noticed</span> them before.</p>
                    <p class="line"><span class="speaker-A">Speaker A:</span> Please <span class="vocab" data-tr="giymek / takmak">put one on</span> before you go inside the workspace.</p>
                    <p class="line"><span class="speaker-B">Speaker B:</span> I will <span class="vocab" data-tr="yapmak">do</span> that right now. Thank you for reminding me.</p>
                `
            }
        ]
    },
    {
        category: "20. Business Dinners and Entertainment",
        situations: [
            { 
                id: 58, 
                title: "Ordering Food", 
                audioFile: "58_Business_Dinners_and_Entertainment_Ordering_Food.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Host:</span> This restaurant is very <span class="vocab" data-tr="hoş / güzel">nice</span>. What will you <span class="vocab" data-tr="yemek (fiil)">eat</span>?</p>
                    <p class="line"><span class="speaker-B">Guest:</span> I will <span class="vocab" data-tr="almak / sahip olmak">have</span> the steak with a large salad.</p>
                    <p class="line"><span class="speaker-A">Host:</span> That sounds <span class="vocab" data-tr="sağlıklı">healthy</span>. I will <span class="vocab" data-tr="sipariş vermek">order</span> the grilled chicken.</p>
                    <p class="line"><span class="speaker-B">Guest:</span> <span class="vocab" data-tr="mükemmel">Excellent</span> choice. The food here always <span class="vocab" data-tr="kokmak">smells</span> wonderful.</p>
                    <p class="line"><span class="speaker-A">Host:</span> Do you want to <span class="vocab" data-tr="paylaşmak">share</span> some water for the table?</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Yes, sparkling water, please.</p>
                    <p class="line"><span class="speaker-A">Host:</span> Great. I will <span class="vocab" data-tr="çağırmak">call</span> the <span class="vocab" data-tr="garson">waiter</span> over now.</p>
                    <p class="line"><span class="speaker-B">Guest:</span> Thank you. I am very <span class="vocab" data-tr="aç">hungry</span> after our long meeting.</p>
                `
            },
            { 
                id: 59, 
                title: "Talking about Hobbies", 
                audioFile: "59_Business_Dinners_and_Entertainment_Talking_about_Hobbies.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Coworker A:</span> What do you <span class="vocab" data-tr="sevmek / hoşlanmak">like</span> to do on the weekends?</p>
                    <p class="line"><span class="speaker-B">Coworker B:</span> I like <span class="vocab" data-tr="dinlemek">listening</span> to music. I have a collection of old records.</p>
                    <p class="line"><span class="speaker-A">Coworker A:</span> That is <span class="vocab" data-tr="ilginç">interesting</span>. What kind of music do you like?</p>
                    <p class="line"><span class="speaker-B">Coworker B:</span> I <span class="vocab" data-tr="çok sevmek">love</span> old classic rock and jazz.</p>
                    <p class="line"><span class="speaker-A">Coworker A:</span> I haven't <span class="vocab" data-tr="duymadım">heard</span> much jazz. I like to <span class="vocab" data-tr="izlemek">watch</span> sports.</p>
                    <p class="line"><span class="speaker-B">Coworker B:</span> Me too. I am a big fan of football.</p>
                    <p class="line"><span class="speaker-A">Coworker A:</span> Maybe we can <span class="vocab" data-tr="gitmek">go</span> to a game next time I visit the city.</p>
                    <p class="line"><span class="speaker-B">Coworker B:</span> I would love that. Let's <span class="vocab" data-tr="planlamak">plan</span> it for next month.</p>
                `
            },
            { 
                id: 60, 
                title: "Talking about Family", 
                audioFile: "60_Business_Dinners_and_Entertainment_Talking_about_Family.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Do you have a <span class="vocab" data-tr="büyük">large</span> family?</p>
                    <p class="line"><span class="speaker-B">Employee:</span> I <span class="vocab" data-tr="yaşamak">live</span> with my wife, our <span class="vocab" data-tr="genç / küçük">young</span> son, and our dog.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Oh, what kind of dog do you have?</p>
                    <p class="line"><span class="speaker-B">Employee:</span> He is a toy poodle. He is three years old and very <span class="vocab" data-tr="küçük">small</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Dogs are great for children. Does your son <span class="vocab" data-tr="oynamak">play</span> with him?</p>
                    <p class="line"><span class="speaker-B">Employee:</span> Yes, they play in the park every day.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is <span class="vocab" data-tr="harika">wonderful</span>. It is nice to <span class="vocab" data-tr="dinlenmek">relax</span> after work.</p>
                    <p class="line"><span class="speaker-B">Employee:</span> It really is. Family time is the most <span class="vocab" data-tr="önemli">important</span> thing.</p>
                `
            }
        ]
    },{
        category: "21. Training and Learning New Skills",
        situations: [
            { 
                id: 61, 
                title: "A New Language App", 
                audioFile: "61_Training_and_Learning_New_Skills_A_New_Language_App.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> We need our sales team to <span class="vocab" data-tr="öğrenmek">learn</span> a <span class="vocab" data-tr="yeni">new</span> language.</p>
                    <p class="line"><span class="speaker-B">Trainer:</span> I <span class="vocab" data-tr="katılıyorum">agree</span>. It will <span class="vocab" data-tr="yardım etmek">help</span> us talk to our new international clients.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I found a <span class="vocab" data-tr="harika">great</span> app on my phone. It <span class="vocab" data-tr="öğretir">teaches</span> vocabulary.</p>
                    <p class="line"><span class="speaker-B">Trainer:</span> Does it teach <span class="vocab" data-tr="zor">difficult</span> things like grammar?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, it explains everything very <span class="vocab" data-tr="açıkça">clearly</span> with pictures.</p>
                    <p class="line"><span class="speaker-B">Trainer:</span> That is <span class="vocab" data-tr="mükemmel">perfect</span>. Can you <span class="vocab" data-tr="göndermek">send</span> the link to the team?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I will send it right now. They can use it for ten minutes a day.</p>
                    <p class="line"><span class="speaker-B">Trainer:</span> Thank you. Learning a new language is always <span class="vocab" data-tr="faydalı">useful</span>.</p>
                `
            },
            { 
                id: 62, 
                title: "Improving Production", 
                audioFile: "62_Training_and_Learning_New_Skills_Improving_Production.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Boss:</span> We need to help the factory workers <span class="vocab" data-tr="öğrenmek">learn</span> the new machines <span class="vocab" data-tr="daha hızlı">faster</span>.</p>
                    <p class="line"><span class="speaker-B">Supervisor:</span> You are <span class="vocab" data-tr="haklı">right</span>. I hadn't thought about that before.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Can we make a <span class="vocab" data-tr="basit">simple</span> guide for them to read?</p>
                    <p class="line"><span class="speaker-B">Supervisor:</span> I can make a short document with <span class="vocab" data-tr="net / açık">clear</span> pictures.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> That is a very <span class="vocab" data-tr="yardımcı">helpful</span> idea.</p>
                    <p class="line"><span class="speaker-B">Supervisor:</span> Yes, pictures are <span class="vocab" data-tr="kolay">easy</span> to <span class="vocab" data-tr="anlamak">understand</span> for everyone.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Please make a draft by next week and <span class="vocab" data-tr="göstermek">show</span> it to me.</p>
                    <p class="line"><span class="speaker-B">Supervisor:</span> I will <span class="vocab" data-tr="başlamak">start</span> making it today.</p>
                `
            },
            { 
                id: 63, 
                title: "Taking a Class", 
                audioFile: "63_International_Business_&_Expansion_Taking_a_Class.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I want to get <span class="vocab" data-tr="daha iyi">better</span> at using the accounting software.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> There is an <span class="vocab" data-tr="çevrimiçi">online</span> class you can take for that.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Really? Does the company <span class="vocab" data-tr="ödemek">pay</span> for the class?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Yes, if you <span class="vocab" data-tr="geçmek">pass</span> the <span class="vocab" data-tr="son">final</span> test, we will pay for it.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> That is wonderful. How <span class="vocab" data-tr="uzun">long</span> does the class take?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> It takes about four weeks to <span class="vocab" data-tr="bitirmek">finish</span> all the lessons.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I will <span class="vocab" data-tr="kaydolmak">sign up</span> for it this weekend.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Good luck! It will be very <span class="vocab" data-tr="faydalı / yardımcı">helpful</span> for your <span class="vocab" data-tr="günlük">daily</span> tasks.</p>
                `
            }
        ]
    },
    {
        category: "22. International Business & Expansion",
        situations: [
            { 
                id: 64, 
                title: "Opening a New Office", 
                audioFile: "64_International_Business_&_Expansion_Opening_a_New_Office.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Director:</span> Our company is <span class="vocab" data-tr="büyüyor">growing</span>. We need a <span class="vocab" data-tr="yeni">new</span> office in Europe.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Where should we <span class="vocab" data-tr="açmak">open</span> the new branch?</p>
                    <p class="line"><span class="speaker-A">Director:</span> I think we should look at cities with <span class="vocab" data-tr="iyi">good</span> transportation.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That is a good idea. Are the living costs good there?</p>
                    <p class="line"><span class="speaker-A">Director:</span> Yes, we need a place that is <span class="vocab" data-tr="uygun fiyatlı">affordable</span> for our staff.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> We will need to get visas for the managers who <span class="vocab" data-tr="taşınmak">move</span> there.</p>
                    <p class="line"><span class="speaker-A">Director:</span> The legal team is already <span class="vocab" data-tr="hazırlıyor">preparing</span> the visa documents.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> <span class="vocab" data-tr="mükemmel">Excellent</span>. Let's <span class="vocab" data-tr="planlamak">plan</span> a visit there next spring.</p>
                `
            },
            { 
                id: 65, 
                title: "Exporting Goods", 
                audioFile: "65_International_Business_&_Expansion_Exporting_Goods.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Leader:</span> How many countries do we <span class="vocab" data-tr="satmak">sell</span> our products to now?</p>
                    <p class="line"><span class="speaker-B">Sales Head:</span> We currently export our materials to many countries.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> That is a <span class="vocab" data-tr="harika">great</span> number. Can we <span class="vocab" data-tr="eklemek">add</span> more countries this year?</p>
                    <p class="line"><span class="speaker-B">Sales Head:</span> Yes, but we need to <span class="vocab" data-tr="işe almak">hire</span> more people for the team.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> Let's talk to HR about finding three new export managers.</p>
                    <p class="line"><span class="speaker-B">Sales Head:</span> I will write the job description this afternoon.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> Make sure they have a lot of experience with <span class="vocab" data-tr="uluslararası">international</span> shipping.</p>
                    <p class="line"><span class="speaker-B">Sales Head:</span> I will definitely <span class="vocab" data-tr="dahil etmek">include</span> that in the requirements.</p>
                `
            },
            { 
                id: 66, 
                title: "Brand History", 
                audioFile: "66_Job_Promotions_and_Career_Goals_Brand_History.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Marketer 1:</span> We want something with a good history for our new bath product.</p>
                    <p class="line"><span class="speaker-B">Marketer 2:</span> Like how the Iacusi family named their product?</p>
                    <p class="line"><span class="speaker-A">Marketer 1:</span> Yes! It was <span class="vocab" data-tr="yanlış yazılmış">misspelled</span> during immigration, but it's a great story.</p>
                    <p class="line"><span class="speaker-B">Marketer 2:</span> Exactly. A <span class="vocab" data-tr="güçlü">strong</span> history helps build a better brand.</p>
                    <p class="line"><span class="speaker-A">Marketer 1:</span> Let's ask the team to look for <span class="vocab" data-tr="ilginç">interesting</span> historical words.</p>
                    <p class="line"><span class="speaker-B">Marketer 2:</span> I will send them an email right away.</p>
                    <p class="line"><span class="speaker-A">Marketer 1:</span> Good. We need a name that people will <span class="vocab" data-tr="hatırlamak">remember</span>.</p>
                    <p class="line"><span class="speaker-B">Marketer 2:</span> I completely <span class="vocab" data-tr="katılıyorum">agree</span>.</p>
                `
            }
        ]
    },
    {
        category: "23. Job Promotions and Career Goals",
        situations: [
            { 
                id: 67, 
                title: "Asking for a Promotion", 
                audioFile: "67_Job_Promotions_and_Career_Goals_Asking_for_a_Promotion.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I would like to talk about my <span class="vocab" data-tr="gelecek">future</span> in the company.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Of course. You are doing a <span class="vocab" data-tr="harika">great</span> job on the sales team.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. I want to become a team <span class="vocab" data-tr="lider">leader</span> next year.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> That is a good goal. What new skills do you need to <span class="vocab" data-tr="öğrenmek">learn</span>?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I need to learn more about training new workers.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> We have a management class you can take in the summer.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> That would be <span class="vocab" data-tr="mükemmel">perfect</span>. How do I <span class="vocab" data-tr="kaydolmak">sign up</span> for it?</p>
                    <p class="line"><span class="speaker-B">Boss:</span> I will send you the registration form tomorrow morning.</p>
                `
            },
            { 
                id: 68, 
                title: "Getting a New Job Title", 
                audioFile: "68_Job_Promotions_and_Career_Goals_Getting_a_New_Job_Title.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> I have some very <span class="vocab" data-tr="iyi">good</span> news for you today.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Really? What is the good news?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We are giving you the <span class="vocab" data-tr="unvan / başlık">title</span> of Senior Designer.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Wow, thank you! I am so <span class="vocab" data-tr="mutlu">happy</span> to hear that.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> You <span class="vocab" data-tr="hak ettin">earned</span> it. Your work is always very <span class="vocab" data-tr="yaratıcı">creative</span> and <span class="vocab" data-tr="hızlı">fast</span>.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Will I have <span class="vocab" data-tr="farklı">different</span> tasks now?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, you will help <span class="vocab" data-tr="kontrol etmek">check</span> the work of the junior designers.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I am <span class="vocab" data-tr="hazır">ready</span> for the new challenge.</p>
                `
            },
            { 
                id: 69, 
                title: "A Performance Review", 
                audioFile: "69_Team_Building_and_Company_Culture_A_Performance_Review.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Boss:</span> Let's talk about your work this past year.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Okay. I <span class="vocab" data-tr="bitirdim">finished</span> all my projects on time.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Yes, you did. But your communication with the team needs work.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I know. Sometimes I forget to <span class="vocab" data-tr="yanıtlamak">reply</span> to emails <span class="vocab" data-tr="hızlıca">quickly</span>.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Please try to <span class="vocab" data-tr="cevap vermek">answer</span> all emails within one day.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will do that. I will check my inbox every morning.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Good. Everything else is excellent. Keep it up.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Thank you for your <span class="vocab" data-tr="dürüst">honest</span> feedback.</p>
                `
            }
        ]
    },
    {
        category: "24. Team Building and Company Culture",
        situations: [
            { 
                id: 70, 
                title: "Planning a Team Lunch", 
                audioFile: "70_Team_Building_and_Company_Culture_Planning_a_Team_Lunch.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> We should have a team lunch this Friday.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> That is a <span class="vocab" data-tr="harika">great</span> idea. Where should we go eat?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> There is a <span class="vocab" data-tr="yeni">new</span> Italian restaurant near the park.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Do they have <span class="vocab" data-tr="vejetaryen">vegetarian</span> food for Sarah?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, they have very <span class="vocab" data-tr="iyi">good</span> salads and vegetable soup.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> <span class="vocab" data-tr="mükemmel">Perfect</span>. What time should we make the reservation?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Let's go at 12:30. I will call them to book a table now.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Please <span class="vocab" data-tr="davet etmek">invite</span> the whole department in the group chat.</p>
                `
            },
            { 
                id: 71, 
                title: "Welcoming a New Employee", 
                audioFile: "71_Team_Building_and_Company_Culture_Welcoming_a_New_Employee.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> Hello, you must be the <span class="vocab" data-tr="yeni">new</span> accountant.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, I am. My name is Robert. Nice to meet you.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> I am Jane. Welcome to the finance team!</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Thank you. Everyone is very <span class="vocab" data-tr="arkadaş canlısı">friendly</span> here.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> We try to <span class="vocab" data-tr="yardım etmek">help</span> each other. Do you want a tour of the office?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, please. I don't know where the coffee <span class="vocab" data-tr="makine">machine</span> is.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> It is in the kitchen down the hall. Let's go.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Great. I really need a <span class="vocab" data-tr="büyük">big</span> cup of coffee this morning.</p>
                `
            },
            { 
                id: 72, 
                title: "A Company Party", 
                audioFile: "72_Office_Technology_and_Security_A_Company_Party.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> Are you going to the winter party next week?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Yes, I am. Are we <span class="vocab" data-tr="izinli">allowed</span> to bring our families?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, husbands, wives, and children are welcome.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> That is <span class="vocab" data-tr="hoş">nice</span>. Will there be music and dancing?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, they <span class="vocab" data-tr="kiraladı">hired</span> a DJ and ordered a lot of food.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Do I need to wear a suit and tie?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> No, it is a <span class="vocab" data-tr="günlük / rahat">casual</span> party. Just wear something <span class="vocab" data-tr="rahat">comfortable</span>.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Sounds <span class="vocab" data-tr="eğlenceli">fun</span>. I will see you there!</p>
                `
            }
        ]
    },
    {
        category: "25. Office Technology and Security",
        situations: [
            { 
                id: 73, 
                title: "A Locked Account", 
                audioFile: "73_Office_Technology_and_Security_A_Locked_Account.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I <span class="vocab" data-tr="yazdım (klavyede)">typed</span> my password <span class="vocab" data-tr="yanlış">wrong</span> three times. Now I am <span class="vocab" data-tr="kilitli">locked</span> out.</p>
                    <p class="line"><span class="speaker-B">IT Support:</span> Don't worry, I can unlock your account for you.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. I always <span class="vocab" data-tr="unutmak">forget</span> my new passwords.</p>
                    <p class="line"><span class="speaker-B">IT Support:</span> You should use a password manager app to <span class="vocab" data-tr="hatırlamak">remember</span> them.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Is that <span class="vocab" data-tr="güvenli">safe</span>? What if someone hacks the app?</p>
                    <p class="line"><span class="speaker-B">IT Support:</span> It is very safe. The company uses a <span class="vocab" data-tr="özel">special</span> business version.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Okay, can you install it on my computer today?</p>
                    <p class="line"><span class="speaker-B">IT Support:</span> Yes, I will do it as soon as your account is <span class="vocab" data-tr="açık">open</span>.</p>
                `
            },
            { 
                id: 74, 
                title: "Suspicious Emails", 
                audioFile: "74_Office_Technology_and_Security_Suspicious_Emails.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I got a <span class="vocab" data-tr="tuhaf / garip">strange</span> email asking for my bank details.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Do not <span class="vocab" data-tr="tıklamak">click</span> any links in that email!</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I didn't click anything. It looks like it is from our boss.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> It is a <span class="vocab" data-tr="hile / numara">trick</span>. It is called a phishing email.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> What should I do with it?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Send it to the IT security team, and then <span class="vocab" data-tr="silmek">delete</span> it.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I will do that right now. It looked very <span class="vocab" data-tr="gerçek">real</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Always check the sender's address very <span class="vocab" data-tr="dikkatlice">carefully</span>.</p>
                `
            },
            { 
                id: 75, 
                title: "Losing an ID Badge", 
                audioFile: "75_Factory_and_Production_Losing_an_ID_Badge.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> I can't <span class="vocab" data-tr="bulmak">find</span> my office ID badge anywhere.</p>
                    <p class="line"><span class="speaker-B">Security Guard:</span> When did you last see it?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I had it yesterday when I left the building at five o'clock.</p>
                    <p class="line"><span class="speaker-B">Security Guard:</span> I will check the <span class="vocab" data-tr="kayıp">lost</span> and found box for you.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. I hope it is there.</p>
                    <p class="line"><span class="speaker-B">Security Guard:</span> It is not here. We need to <span class="vocab" data-tr="yazdırmak">print</span> a new one for you.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Do I have to <span class="vocab" data-tr="ödemek">pay</span> for a new badge?</p>
                    <p class="line"><span class="speaker-B">Security Guard:</span> No, the first replacement is <span class="vocab" data-tr="ücretsiz">free</span>. Stand here for a photo.</p>
                `
            }
        ]
    },
    {
        category: "26. Factory and Production",
        situations: [
            { 
                id: 76, 
                title: "Meeting Production Goals", 
                audioFile: "76_Factory_and_Production_Meeting_Production_Goals.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> How many parts did we <span class="vocab" data-tr="yapmak">make</span> today?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We made one thousand parts this morning.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is good, but we need two thousand by tonight.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We can work <span class="vocab" data-tr="daha hızlı">faster</span> after the lunch break.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Please make sure the machines are <span class="vocab" data-tr="çalışıyor">running</span> well.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I <span class="vocab" data-tr="kontrol ettim">checked</span> them an hour ago. They are fine.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Great. Let me know when we <span class="vocab" data-tr="ulaşmak / vurmak">hit</span> the target.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will send you a message at five o'clock.</p>
                `
            },
            { 
                id: 77, 
                title: "Ordering Raw Materials", 
                audioFile: "77_Factory_and_Production_Ordering_Raw_Materials.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker 1:</span> We are <span class="vocab" data-tr="tükeniyor">running out</span> of materials for the machines.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> How much do we have left?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Only <span class="vocab" data-tr="yeterli">enough</span> for two more days of work.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I will call the supplier and ask for a <span class="vocab" data-tr="hızlı">fast</span> delivery.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Can they send it by tomorrow morning?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I hope so. I will ask them to <span class="vocab" data-tr="koymak">put</span> it on the first truck.</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Let me know if we need to <span class="vocab" data-tr="ödemek">pay</span> <span class="vocab" data-tr="fazladan">extra</span> for that.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I will check the price and call you back.</p>
                `
            },
            { 
                id: 78, 
                title: "Factory Safety", 
                audioFile: "78_Event_Planning_and_Conferences_Factory_Safety.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Please <span class="vocab" data-tr="hatırlamak">remember</span> to wear your safety glasses.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Oh, I forgot them on my desk. I'm sorry.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> You cannot be on the factory floor without them.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will go back and get them right now.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Thank you. We want everyone to be safe here.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I understand. I won't forget them again.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Also, make sure your shoes are <span class="vocab" data-tr="kapalı">closed</span> at the front.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, these are my special <span class="vocab" data-tr="ağır">heavy</span> work shoes.</p>
                `
            }
        ]
    },
    {
        category: "27. Event Planning and Conferences",
        situations: [
            { 
                id: 79, 
                title: "Booking a Place", 
                audioFile: "79_Event_Planning_and_Conferences_Booking_a_Place.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Planner 1:</span> We need a <span class="vocab" data-tr="büyük">big</span> room for the company meeting next month.</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> How many people are coming to the meeting?</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> About one hundred people from different offices.</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> The hotel downtown has a very <span class="vocab" data-tr="hoş / güzel">nice</span> conference room.</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> Does it have a screen for our presentations?</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> Yes, it has a big screen and a good sound system.</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> Can you <span class="vocab" data-tr="aramak">call</span> them and ask about the price?</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> I will call them right now and ask for a discount.</p>
                `
            },
            { 
                id: 80, 
                title: "Planning the Food", 
                audioFile: "80_Event_Planning_and_Conferences_Planning_the_Food.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Planner 1:</span> What kind of food should we <span class="vocab" data-tr="servis yapmak">serve</span> at the conference?</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> We should have coffee and tea in the morning.</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> And what about lunch for the guests?</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> We can order sandwiches and some <span class="vocab" data-tr="taze">fresh</span> fruit.</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> Make sure we have some <span class="vocab" data-tr="vejetaryen">vegetarian</span> options, too.</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> I will tell the catering company to bring <span class="vocab" data-tr="bolca">plenty</span> of salads.</p>
                    <p class="line"><span class="speaker-A">Planner 1:</span> Perfect. We want everyone to have a <span class="vocab" data-tr="iyi">good</span> meal.</p>
                    <p class="line"><span class="speaker-B">Planner 2:</span> I will send you the menu choices tomorrow.</p>
                `
            },
            { 
                id: 81, 
                title: "Sending Invitations", 
                audioFile: "81_Designing_New_Products_Sending_Invitations.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Did you send the emails for the big event?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Yes, I <span class="vocab" data-tr="gönderdim">sent</span> them to all the managers yesterday.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Have people started to <span class="vocab" data-tr="cevaplamak">answer</span> yet?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Fifty people said yes, they will come.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is a good start. We need to know by next Friday.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> I will send a <span class="vocab" data-tr="hatırlatıcı">reminder</span> email on Wednesday.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Please add the schedule to the reminder email.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> I will make a <span class="vocab" data-tr="hoş">nice</span> PDF document with all the times.</p>
                `
            }
        ]
    },
    {
        category: "28. Designing New Products",
        situations: [
            { 
                id: 82, 
                title: "Looking at a New Design", 
                audioFile: "82_Designing_New_Products_Looking_at_a_New_Design.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Designer 1:</span> Here is the <span class="vocab" data-tr="ilk">first</span> drawing of the new coffee cup.</p>
                    <p class="line"><span class="speaker-B">Designer 2:</span> I like the shape, but the handle is too <span class="vocab" data-tr="küçük">small</span>.</p>
                    <p class="line"><span class="speaker-A">Designer 1:</span> I can make the handle bigger so it is <span class="vocab" data-tr="kolay">easy</span> to hold.</p>
                    <p class="line"><span class="speaker-B">Designer 2:</span> Yes, please do that. And what colors will we use?</p>
                    <p class="line"><span class="speaker-A">Designer 1:</span> I thought we could make it in blue and green.</p>
                    <p class="line"><span class="speaker-B">Designer 2:</span> Green is <span class="vocab" data-tr="hoş / güzel">nice</span>. It makes people think of nature.</p>
                    <p class="line"><span class="speaker-A">Designer 1:</span> I will change the drawing and show you again.</p>
                    <p class="line"><span class="speaker-B">Designer 2:</span> I look forward to seeing the <span class="vocab" data-tr="yeni">new</span> version.</p>
                `
            },
            { 
                id: 83, 
                title: "Testing a Prototype", 
                audioFile: "83_Designing_New_Products_Testing_a_Prototype.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Creator:</span> We made the first sample of the new office chair.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> It looks very <span class="vocab" data-tr="modern">modern</span>. Is it <span class="vocab" data-tr="rahat">comfortable</span> to sit on?</p>
                    <p class="line"><span class="speaker-A">Creator:</span> Please sit down and tell me what you think.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> The back is nice, but the seat is a little <span class="vocab" data-tr="sert">hard</span>.</p>
                    <p class="line"><span class="speaker-A">Creator:</span> We can add more <span class="vocab" data-tr="yumuşak">soft</span> material to the seat.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That would be better. How much does it cost to make?</p>
                    <p class="line"><span class="speaker-A">Creator:</span> It is <span class="vocab" data-tr="ucuz">cheap</span> to make, so we can sell it for a good price.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Great work. Let's fix the seat and start making more.</p>
                `
            },
            { 
                id: 84, 
                title: "Reading Customer Feedback", 
                audioFile: "84_Managing_Projects_Reading_Customer_Feedback.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> What do the customers think of our new product?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Most people like it, but some say it is too <span class="vocab" data-tr="ağır">heavy</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Can we use a <span class="vocab" data-tr="daha hafif">lighter</span> material for the next ones?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, our engineers are looking for new materials now.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need to <span class="vocab" data-tr="dinlemek">listen</span> to the customers so they keep buying.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I agree. I will write a <span class="vocab" data-tr="rapor">report</span> with all their comments.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Send the report to the design team this afternoon.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will email it to everyone before I leave today.</p>
                `
            }
        ]
    },
    {
        category: "29. Managing Projects",
        situations: [
            { 
                id: 85, 
                title: "Checking the Timeline", 
                audioFile: "85_Managing_Projects_Checking_the_Timeline.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Are we on time with the new website project?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We are a little behind. The pictures are not ready.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> When will the photographer send the pictures?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> He said he will send them on Wednesday morning.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is too <span class="vocab" data-tr="geç">late</span>. The website opens on Thursday.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will call him and tell him it is an <span class="vocab" data-tr="acil durum">emergency</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Please do. We cannot <span class="vocab" data-tr="geciktirmek">delay</span> the opening day.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will do my best to get them today.</p>
                `
            },
            { 
                id: 86, 
                title: "Dividing the Work", 
                audioFile: "86_Managing_Projects_Dividing_the_Work.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> There is a lot of work for this new client.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We need to <span class="vocab" data-tr="bölmek / paylaştırmak">divide</span> the tasks between the team.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Who is going to write the text for the brochure?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Sarah is the <span class="vocab" data-tr="en iyi">best</span> writer. She can do that part.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Okay, and who will design the front cover?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Mark is a <span class="vocab" data-tr="harika">great</span> artist. I will ask him to draw it.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That sounds like a good plan. Tell them to start now.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will hold a <span class="vocab" data-tr="hızlı">quick</span> meeting with them in five minutes.</p>
                `
            },
            { 
                id: 87, 
                title: "Budget Updates", 
                audioFile: "87_Working_with_Lawyers_and_Contracts_Budget_Updates.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Boss:</span> How much money have we <span class="vocab" data-tr="harcadık">spent</span> on the project so far?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> We have spent half of the budget in the first month.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> That is okay, we are <span class="vocab" data-tr="yarılamış / yarı yolda">halfway</span> finished with the work.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> But we still need to pay for the online advertisements.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> We have enough money left for the ads. Don't worry.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> I just want to be <span class="vocab" data-tr="dikkatli">careful</span> so we don't spend too much.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Keep a close eye on the numbers every week.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> I have an Excel sheet that <span class="vocab" data-tr="takip eder">tracks</span> every dollar we spend.</p>
                `
            }
        ]
    },
    {
        category: "30. Working with Lawyers and Contracts",
        situations: [
            { 
                id: 88, 
                title: "Reviewing Terms", 
                audioFile: "88_Working_with_Lawyers_and_Contracts_Reviewing_Terms.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Have you sent the audio files to the lawyer yet?</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> No, I hadn't finished renaming them for the folder.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Please make sure the audio files are named "law".</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> Got it. I will change the names so they say "law" instead of "legal".</p>
                    <p class="line"><span class="speaker-A">Manager:</span> They need to <span class="vocab" data-tr="incelemek / gözden geçirmek">review</span> everything before we sign the contract.</p>
                    <p class="line"><span class="speaker-B">Assistant:</span> I will send the files to them right away.</p>
                `
            },
            { 
                id: 89, 
                title: "Keeping a Secret", 
                audioFile: "89_Working_with_Lawyers_and_Contracts_Keeping_a_Secret.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Lawyer:</span> Before we tell you our idea, you must sign this paper.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> What kind of paper is this?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> It is a <span class="vocab" data-tr="gizli">secret</span> agreement. You cannot tell anyone our plans.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> I understand. Many companies ask for this.</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> Please read it <span class="vocab" data-tr="dikkatlice">carefully</span> and sign at the bottom.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> The rules are <span class="vocab" data-tr="açık / net">clear</span>. I will sign it now.</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> Thank you. Now we can show you the new product.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> I am very <span class="vocab" data-tr="heyecanlı">excited</span> to see what you are building.</p>
                `
            },
            { 
                id: 90, 
                title: "Protecting the Brand", 
                audioFile: "90_Working_with_Lawyers_and_Contracts_Protecting_the_Brand.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Another company is using our logo on their website.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> That is not <span class="vocab" data-tr="izinli">allowed</span>. It is our <span class="vocab" data-tr="resmi">official</span> logo.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need our lawyer to send them a letter.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> The letter should tell them to stop using it <span class="vocab" data-tr="derhal">immediately</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, we worked hard to design that logo.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will call the lawyer and explain the situation.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Ask him how long it will take to <span class="vocab" data-tr="çözmek / tamir etmek">fix</span> this problem.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will let you know as soon as I speak with him.</p>
                `
            }
        ]
    }
];
