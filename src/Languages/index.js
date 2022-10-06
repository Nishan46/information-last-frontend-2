import axios from 'axios'

const LANGUAGE = {
    'en':{

        //header Values

        header_title:'Welcome !',
        header_message_1:`This is Mahindian's broadcasting unit Registration form.`,
        header_message_2:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,

        //personal values
        email:'Email Adress',
        first_name:'First Name',
        last_name:'Last Name',
        full_name:'Full Name',
        birthday:'Birth Day',
        address:'Address',
        grade:'Grade',
        admission_id:'Index Number',
        phone:'Mobile Number',
        gender:'Gender',
        Categories_Your_Interested:'Categories Your Interested',
        Photography:'Photography',
        Videography:'Videography',
        Technical:'Technical',
        Announcing:'Announcing',
        Reporting:'Reporting',
        Photo_Editing:'Photo Editing',
        Video_Editing:'Video Editing',
        Graphic_Designing:'Graphic Designing',
        Web_Designing:'Web Designing',

        //genders
        male:'Male',
        female:'Female',
        other:'Other',

        // parents

        parent_name:'Parent Name',
        parent_adress:'Parent Address',
        parent_phone:'Parent Phone',
    },
    'si':{

        //header Values

        header_title:'සාදරයෙන් පිළිගනිමු !',
        header_message_1:`මෙය මහින්දයන්ගේ විකාශන ඒකකයේ ලියාපදිංචි කිරීමේ පෝරමයයි.`,
        header_message_2:`Lorem Ipsum යනු මුද්‍රණ සහ අකුරු සැකසුම් කර්මාන්තයේ ව්‍යාජ පෙළකි. Lorem Ipsum කර්මාන්තයේ ප්‍රමිතිය වී ඇත`,

        //personal values
        email:'විද්‍යුත් තැපැල් ලිපිනය',
        first_name:'මුල් නම',
        last_name:'අවසන් නම',
        full_name:'සම්පූර්ණ නම',
        birthday:'උපන් දිනය',
        address:'ලිපිනය',
        grade:'පන්තිය',
        admission_id:'ඇතුළත් වීමේ අංකය',
        phone:'දුරකථන අංකය',
        gender:'ස්ත්රී පුරුෂ භාවය',
        Categories_Your_Interested:'ඔබ උනන්දුවක් දක්වන කාණ්ඩ',
        Photography:'ඡායාරූප ක්ෂේත්‍රය',
        Videography:'වීඩියෝකරණ ක්ෂේත්‍රය',
        Technical:'තාක්ෂණික ක්ෂේත්රය',
        Announcing:'නිවේදන ක්ෂේත්‍රය',
        Reporting:'වාර්තාකරණ ක්ෂේත්රය',
        Photo_Editing:'ඡායාරූප සංස්කරණ ක්ෂේත්‍රය',
        Video_Editing:'වීඩියෝ සංස්කරණ ක්ෂේත්‍රය',
        Graphic_Designing:'ග්‍රැෆික් නිර්මාණ ක්ෂේත්‍රය',
        Web_Designing:'වෙබ් නිර්මාණ ක්ෂේත්‍රය',
        
        //genders
        male:'පිරිමි',
        female:'ගැහැණු',
        other:'වෙනත්',

        // parents
        parent_name:'භාරකරුගේ සම්පුර්ණ නම',
        parent_adress:'භාරකරුගේ ලිපිනය',
        parent_phone:'භාරකරුගේ දුරකථන අංකය',
    }
}

export default LANGUAGE;