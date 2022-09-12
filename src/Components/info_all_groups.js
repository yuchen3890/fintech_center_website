interface groupItem {
    name: String;
    lead: String;
    email: String;
    intro: String;
}

const GROUP_ITEMS: Array<groupItem> = [
    {
        route: '/finTech',
        name: '金融科技組',
        lead: '薛智文教授',
        email: 'cwhsueh@csie.ntu.edu.tw',
        intro: '金融科技組的目標為開發各種前瞻理論與方法，例如區塊鏈、人工智慧、機器學習、資訊安全、密碼學等，並將這些理論與方法實際用於金融科技，以促進經濟發展並提升生活水平。',
    },
    {
        route: '/finBuss',
        name: '金融業務組',
        lead: '張森林教授',
        email: 'chungsl@ntu.edu.tw',
        intro: '金融業務組的目標為詳細檢視各項金融業務的需求，並適時導入相關的資訊科技，以簡化人力並提高自動化，同時也希望踩在資訊科技的肩榜上，能夠提升並開拓更有前景的金融業務。',
    },
    {
        route: '/finLaw',
        name: '金融法律組',
        lead: '林仁光教授',
        email: 'andrewlin@ntu.edu.tw',
        intro: '金融法律組著重在金融科技相關法律議題之研究，尤其在金融科技發展快速的情況下，現行法規如何因應產業發展，應如何調整始能兼顧金融科技發展以及產業應有之規範，都是本組的研究範疇。',
    },
    {
        route: '/industry',
        name: '產學合作組',
        lead: '陳永耀教授',
        email: 'yychen@ntu.edu.tw',
        intro: '產學合作組的目標為媒合技術開發及產業需求，希望將大學及研究單位的研發方向逐步導向產業需求，同時促進技術端與產業端的對話和合作，降低彼此之間的差距，最後能把研發的能量確實轉化成產業和經濟的實質力量。',
    },
]
export { GROUP_ITEMS };