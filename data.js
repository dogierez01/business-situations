const courseData = [
    {
        category: "1. Human Resources (HR)",
        situations: [
            { 
                id: 1, 
                title: "Asking for a Raise", 
                audioFile: "01_Human_Resources_HR_Asking_for_a_Raise.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> Can we talk about my <span class="vocab" data-tr="maaş">salary</span>? I work very hard.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Yes, we can. You did a great job this year.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. I do more work now, so I'd like more money.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> How much more money do you want?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I'd like a 10% <span class="vocab" data-tr="artış / zam">increase</span>, please.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's a lot, but I'll ask the boss.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Thank you. Here is a list of my new <span class="vocab" data-tr="görevler">tasks</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Great. I'll call you next week.</p>
                `
            },
            { 
                id: 2, 
                title: "The First Day", 
                audioFile: "02_Human_Resources_HR_The_First_Day.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">HR Person:</span> Welcome to the company! Here are your papers.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Thank you! I'm very happy to be here.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Do you have any questions about the <span class="vocab" data-tr="kurallar">rules</span>?</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Yes. When does my health <span class="vocab" data-tr="sigorta">insurance</span> start?</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> It starts next month. You don't have to wait long.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> That's good. Do I need to <span class="vocab" data-tr="imzalamak">sign</span> these papers now?</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Yes, please sign them and give them back to me.</p>
                    <p class="line"><span class="speaker-B">New Worker:</span> Okay, I'll do it right now.</p>
                `
            },
            { 
                id: 3, 
                title: "Leaving the Company", 
                audioFile: "03_Import_-_Export_Leaving_the_Company.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">HR Person:</span> Thank you for talking to me on your last day.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> No problem. I enjoyed my time here.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> Why are you <span class="vocab" data-tr="ayrılmak">leaving</span> the company?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I found a new job. It's closer to my house.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> I understand. A long drive is very tiring.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, it is. But my manager here was very kind.</p>
                    <p class="line"><span class="speaker-A">HR Person:</span> That's good to hear. We wish you the best.</p>
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
                    <p class="line"><span class="speaker-A">Worker:</span> We have a problem. The ship didn't leave the <span class="vocab" data-tr="liman">port</span>.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Oh no. Why is the <span class="vocab" data-tr="yük / kargo">cargo</span> still there?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> The <span class="vocab" data-tr="gümrük">customs</span> office needs a different paper for the goods.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Didn't we send all the correct forms?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I thought so, but they changed the rules yesterday.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Please call them and send the new form quickly.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I'm doing it right now. I'll email the customer too.</p>
                    <p class="line"><span class="speaker-B">Boss:</span> Good idea. Tell them it will be one day late.</p>
                `
            },
            { 
                id: 5, 
                title: "Buying Materials", 
                audioFile: "05_Import_-_Export_Buying_Materials.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Buyer:</span> The price of cotton is going up next month.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's bad news for our clothes <span class="vocab" data-tr="fabrika">factory</span>.</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> Yes. We shouldn't wait. We should buy more now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Can our <span class="vocab" data-tr="tedarikçi">supplier</span> send us extra cotton this week?</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> I'll ask them. But we might have to pay for fast shipping.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's okay. It's <span class="vocab" data-tr="daha ucuz">cheaper</span> than the new price.</p>
                    <p class="line"><span class="speaker-A">Buyer:</span> I'll call the supplier right away.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Thanks. Let me know what they say.</p>
                `
            },
            { 
                id: 6, 
                title: "Broken Goods", 
                audioFile: "06_Work_Conflicts_Problems_at_Work_Broken_Goods.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Worker:</span> The boxes arrived, but some of them are <span class="vocab" data-tr="kırık / bozuk">broken</span>.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> How many boxes are broken?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> About twenty boxes. The glass inside is in pieces.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> That's terrible. Take photos of the broken glass.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I already took photos on my phone.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Good. We need to send them to the <span class="vocab" data-tr="sigorta">insurance</span> company.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Should I throw the broken things away?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Not yet. Keep them in the corner until I check.</p>
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
                    <p class="line"><span class="speaker-A">Worker 1:</span> Excuse me, can you turn down your music?</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> Oh, sorry. Is it too loud?</p>
                    <p class="line"><span class="speaker-A">Worker 1:</span> Yes, it is. I can't <span class="vocab" data-tr="odaklanmak">focus</span> on my work.</p>
                    <p class="line"><span class="speaker-B">Worker 2:</span> I didn't realize. I'll use my headphones.</p>
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
                    <p class="line"><span class="speaker-A">Manager:</span> Why didn't you finish the <span class="vocab" data-tr="rapor">report</span> on time?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I'm sorry. I hadn't received the numbers from John.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> You should tell me when you have a problem.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> You're right. I thought John would send them yesterday.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Next time, please send me an email.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I won't make this <span class="vocab" data-tr="hata">mistake</span> again. I'm very sorry.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> It's okay. Just finish it by tomorrow morning.</p>
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
                    <p class="line"><span class="speaker-A">Worker 1:</span> Can you find some pictures and check the <span class="vocab" data-tr="yazım">spelling</span>?</p>
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
                    <p class="line"><span class="speaker-A">Manager:</span> Hello, please sit down. Welcome to our office.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Thank you. It's nice to meet you.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Can you tell me about your last job?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I was a sales <span class="vocab" data-tr="asistan / yardımcı">assistant</span> for two years.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Why do you want to work for our company?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I love your <span class="vocab" data-tr="ürünler">products</span>, and I want to learn more.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That's great. Are you good at working with people?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes, I'm very <span class="vocab" data-tr="arkadaş canlısı">friendly</span> and I like helping customers.</p>
                `
            },
            { 
                id: 11, 
                title: "Talking about Skills", 
                audioFile: "11_Job_Interviews_Talking_about_Skills.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Do you know how to use this computer program?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes, I used it every day at my old job.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Excellent. Sometimes this job is very <span class="vocab" data-tr="stresli">stressful</span>.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I don't mind stress. I stay <span class="vocab" data-tr="sakin">calm</span> and drink water.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Good. We need someone who works fast.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I'm a fast worker, but I also check my work <span class="vocab" data-tr="dikkatlice">carefully</span>.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That's exactly what we need here.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> I'm glad to hear that.</p>
                `
            },
            { 
                id: 12, 
                title: "Asking Questions", 
                audioFile: "12_Day-to-Day_Meetings_&_Planning_Asking_Questions.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Do you have any questions for me?</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Yes. What time does the office open?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We open at 8:30 in the morning and close at 5:00.</p>
                    <p class="line"><span class="speaker-B">Candidate:</span> Do people work here on the weekends?</p>
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
                    <p class="line"><span class="speaker-A">Manager:</span> Good morning, team. What are we working on today?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I am checking the new car <span class="vocab" data-tr="parçalar">parts</span> from the factory.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Are there any problems with the parts?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> No, they look good. The machines are working perfectly.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That is great news. When will they be ready to ship?</p>
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
                    <p class="line"><span class="speaker-B">Team Member:</span> How about "Fast Connect"? It sounds quick and easy.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> I like it, but maybe it is too <span class="vocab" data-tr="yaygın">common</span>.</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> You're right. What if we call it "Smart Sync"?</p>
                    <p class="line"><span class="speaker-A">Leader:</span> "Smart Sync" is better. It sounds very <span class="vocab" data-tr="modern">modern</span>.</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> Yes, and it explains what the app does.</p>
                    <p class="line"><span class="speaker-A">Leader:</span> Let's write that down. Do you have any other ideas?</p>
                    <p class="line"><span class="speaker-B">Team Member:</span> Not yet, but I'll think about it more today.</p>
                `
            },
            { 
                id: 15, 
                title: "Project Kickoff", 
                audioFile: "15_Sales_&_Client_Relations_Project_Kickoff.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Welcome to the new marketing project, everyone.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Thank you. What is our main <span class="vocab" data-tr="hedef">goal</span> for this month?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need to design a new website for our clients.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Do we have photos to use for the homepage?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, the photographers finished their work yesterday.</p>
                    <p class="line"><span class="speaker-B">Designer:</span> Perfect. I can start making the design tomorrow morning.</p>
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
                    <p class="line"><span class="speaker-A">Salesperson:</span> Thank you for meeting me. We make strong materials.</p>
                    <p class="line"><span class="speaker-B">Client:</span> I saw your <span class="vocab" data-tr="katalog">catalog</span>. Your products look high quality.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Yes, and we currently export to many different countries.</p>
                    <p class="line"><span class="speaker-B">Client:</span> That is impressive. Can you send a large <span class="vocab" data-tr="sipariş">order</span>?</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Absolutely. We can deliver it in two weeks.</p>
                    <p class="line"><span class="speaker-B">Client:</span> What happens if the delivery is late?</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> We offer a <span class="vocab" data-tr="indirim">discount</span> if it doesn't arrive on time.</p>
                    <p class="line"><span class="speaker-B">Client:</span> That sounds fair. Let's talk about the price.</p>
                `
            },
            { 
                id: 17, 
                title: "Handling a Complaint", 
                audioFile: "17_Sales_&_Client_Relations_Handling_a_Complaint.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Customer Service:</span> Hello, how can I help you today?</p>
                    <p class="line"><span class="speaker-B">Customer:</span> I am upset. My order arrived, but the color is wrong.</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> I am so sorry about that. What color did you order?</p>
                    <p class="line"><span class="speaker-B">Customer:</span> I ordered blue, but you sent me black.</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> That is our <span class="vocab" data-tr="hata">mistake</span>. I will send the blue one today.</p>
                    <p class="line"><span class="speaker-B">Customer:</span> Do I have to pay to send the black one back?</p>
                    <p class="line"><span class="speaker-A">Customer Service:</span> No, we'll pay for the return <span class="vocab" data-tr="kargo / gönderim">shipping</span>.</p>
                    <p class="line"><span class="speaker-B">Customer:</span> Thank you. I appreciate your quick help.</p>
                `
            },
            { 
                id: 18, 
                title: "Closing a Deal", 
                audioFile: "18_Finance_&_Legal_Closing_a_Deal.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Salesperson:</span> Are you happy with the final <span class="vocab" data-tr="sözleşme">contract</span>?</p>
                    <p class="line"><span class="speaker-B">Client:</span> Yes, the price and the delivery dates look good.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Wonderful. I just need your signature on the last page.</p>
                    <p class="line"><span class="speaker-B">Client:</span> Here you go. I <span class="vocab" data-tr="imzalamak">signed</span> it.</p>
                    <p class="line"><span class="speaker-A">Salesperson:</span> Thank you very much. We're excited to work with you.</p>
                    <p class="line"><span class="speaker-B">Client:</span> We're excited, too. When do we start the first project?</p>
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
                    <p class="line"><span class="speaker-B">Director:</span> Why do you need a bigger <span class="vocab" data-tr="bütçe">budget</span>?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We need to buy three new computers for the new staff.</p>
                    <p class="line"><span class="speaker-B">Director:</span> Computers are <span class="vocab" data-tr="pahalı">expensive</span>. Can they share the old ones?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> No, they need their own computers to work fast.</p>
                    <p class="line"><span class="speaker-B">Director:</span> Okay, I understand. How much money do you need?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> I need about three thousand dollars.</p>
                    <p class="line"><span class="speaker-B">Director:</span> I'll check the company bank account and let you know.</p>
                `
            },
            { 
                id: 20, 
                title: "Contract Review", 
                audioFile: "20_Finance_&_Legal_Contract_Review.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Lawyer:</span> I read the new contract from the supplier.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> Did you find any problems with it?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> Yes. They changed the rules about ending the agreement.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> What do the new rules say?</p>
                    <p class="line"><span class="speaker-A">Lawyer:</span> They say we must pay a <span class="vocab" data-tr="ücret / ceza">fee</span> if we cancel early.</p>
                    <p class="line"><span class="speaker-B">Business Owner:</span> I don't agree with that. Can we remove that rule?</p>
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
                    <p class="line"><span class="speaker-A">Auditor:</span> Can I see the <span class="vocab" data-tr="faturalar / fişler">receipts</span> for the last three months?</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> Yes, they're in the blue folder on the desk.</p>
                    <p class="line"><span class="speaker-A">Auditor:</span> Thank you. I also need to see the payroll documents.</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> I can print those from the computer for you right now.</p>
                    <p class="line"><span class="speaker-A">Auditor:</span> Perfect. This shouldn't take more than two hours.</p>
                    <p class="line"><span class="speaker-B">Accountant:</span> Take your time. Let me know if you have questions.</p>
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
                    <p class="line"><span class="speaker-A">Worker:</span> The big printer in the office is broken again.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Oh no. What is wrong with it this time?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> It is making a loud noise and the paper is stuck.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Did you turn it off and unplug it?</p>
                    <p class="line"><span class="speaker-A">Worker:</span> Yes, I turned it off right away so it doesn't get worse.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Good job. Please call the <span class="vocab" data-tr="tamir">repair</span> company.</p>
                    <p class="line"><span class="speaker-A">Worker:</span> I have their phone number. I will call them right now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Thank you. We need it fixed before tomorrow morning.</p>
                `
            },
            { 
                id: 23, 
                title: "Checking the Products", 
                audioFile: "23_Operations_&_Quality_Control_Checking_the_Products.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Inspector:</span> I checked the new shirts from the factory.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Did you find any problems with them?</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> Yes, the stitching on these five shirts is very bad.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Let me see. You are right, the thread is loose.</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> What should we do with these broken items?</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Put them in the red box. We cannot sell them to customers.</p>
                    <p class="line"><span class="speaker-A">Inspector:</span> Okay. I will check the rest of the boxes now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Please look very closely. Good <span class="vocab" data-tr="kalite">quality</span> is important for us.</p>
                `
            },
            { 
                id: 24, 
                title: "Talking to a Supplier", 
                audioFile: "24_Networking_&_Office_Chat_Talking_to_a_Supplier.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> Hello, I need to talk about our last order.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> Hi! Do you need to order more materials?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Yes, but your new prices are very high for us.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> I am sorry, but the cost of transportation went up recently.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Can you give us a small <span class="vocab" data-tr="indirim">discount</span>? We buy a lot from you.</p>
                    <p class="line"><span class="speaker-B">Supplier:</span> If you buy a large amount, I can give you a 5% discount.</p>
                    <p class="line"><span class="speaker-A">Manager:</span> That works for me. We need it for our export orders.</p>
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
                    <p class="line"><span class="speaker-B">Person B:</span> Hi David, I'm Lisa. I am a software engineer.</p>
                    <p class="line"><span class="speaker-A">Person A:</span> Nice to meet you, Lisa. Are you enjoying the conference?</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Yes, the speakers are very interesting. How about you?</p>
                    <p class="line"><span class="speaker-A">Person A:</span> I like it too. I am learning a lot of new things today.</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Me too. Let's connect on LinkedIn later.</p>
                    <p class="line"><span class="speaker-A">Person A:</span> That is a great idea. Here is my <span class="vocab" data-tr="kartvizit">business card</span>.</p>
                    <p class="line"><span class="speaker-B">Person B:</span> Thank you. I hope you enjoy the rest of the day.</p>
                `
            },
            { 
                id: 26, 
                title: "Talking about the Weekend", 
                audioFile: "26_Networking_&_Office_Chat_Talking_about_the_Weekend.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Coworker 1:</span> Good morning! How was your weekend?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> It was great, thank you. I went to the park.</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> That sounds fun. What did you do there?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> I played football all afternoon with my family.</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> Did your team win the game?</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> No, the other team was too fast! How was your weekend?</p>
                    <p class="line"><span class="speaker-A">Coworker 1:</span> It was quiet. I stayed home and read a book.</p>
                    <p class="line"><span class="speaker-B">Coworker 2:</span> Sometimes a quiet weekend is exactly what you need.</p>
                `
            },
            { 
                id: 27, 
                title: "Welcoming a Visitor", 
                audioFile: "27_Crisis_and_Big_Changes_Welcoming_a_Visitor.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Receptionist:</span> Welcome to the office. Can I help you?</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> Yes, I have a meeting with Mr. Smith at two o'clock.</p>
                    <p class="line"><span class="speaker-A">Receptionist:</span> Let me check his <span class="vocab" data-tr="program / takvim">schedule</span>. What is your name, please?</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> My name is Anna Lee. I am from the marketing agency.</p>
                    <p class="line"><span class="speaker-A">Receptionist:</span> Yes, here is your name. Please sign this visitor book.</p>
                    <p class="line"><span class="speaker-B">Visitor:</span> Okay, I signed it. Where should I wait?</p>
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
                    <p class="line"><span class="speaker-A">Boss:</span> Did you see the bad <span class="vocab" data-tr="yorum / inceleme">review</span> on the internet?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Yes, the customer said our product arrived broken.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> We need to answer them quickly. What should we say?</p>
                    <p class="line"><span class="speaker-B">Worker:</span> We should say we are sorry and ask them to call us.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Good idea. We also need to talk to the shipping team today.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will tell them to use more padding in the boxes.</p>
                    <p class="line"><span class="speaker-A">Boss:</span> Write the message for the internet and show it to me first.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> I will have it ready for you to read in ten minutes.</p>
                `
            },
            { 
                id: 29, 
                title: "Moving to a New Office", 
                audioFile: "29_Crisis_and_Big_Changes_Moving_to_a_New_Office.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">Manager:</span> We are moving to a new office building next month.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Really? Where is the new building located?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> It is in the city center. It is much bigger and brighter.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Will we have our own desks or share them?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> Everyone will have their own desk near a window.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> That is great news. When do we need to pack our things?</p>
                    <p class="line"><span class="speaker-A">Manager:</span> We will give you empty boxes next Friday afternoon.</p>
                    <p class="line"><span class="speaker-B">Worker:</span> Okay, I will start throwing away old papers today.</p>
                `
            },
            { 
                id: 30, 
                title: "A Computer Problem", 
                audioFile: "30_Crisis_and_Big_Changes_A_Computer_Problem.m4a",
                dialogue: `
                    <p class="line"><span class="speaker-A">IT Worker:</span> Please stop working and turn off your computer immediately.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Why? What is happening with the computers?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> We have a computer virus. It is trying to <span class="vocab" data-tr="silmek">delete</span> our files.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Oh no. Are the customer passwords safe right now?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> I don't know yet. I am trying to stop the virus now.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Do we need to call the boss and tell him?</p>
                    <p class="line"><span class="speaker-A">IT Worker:</span> Not yet. Let me fix the security wall first.</p>
                    <p class="line"><span class="speaker-B">Manager:</span> Okay, please work fast. Keep me updated.</p>
                `
            }
        ]
    },
