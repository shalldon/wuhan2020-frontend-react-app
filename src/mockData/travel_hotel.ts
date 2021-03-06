const hotelData = [
  {
    id: 0,
    province: "云南",
    city: "昆明市-官渡区",
    contacts: [{ name: "", tel: "0871-65655099" }],
    address: "官渡区大板桥商业街889号",
    name: "维也纳智好酒店机场店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 1,
    province: "云南",
    city: "昆明市-官渡区",
    contacts: [{ name: "", tel: "0871-65301666" }],
    address: "官渡区长水国际机场旁大板桥酒店娱乐一条街9999号",
    name: "昆明云水星际大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 2,
    province: "云南",
    city: "昭通市-昭阳区",
    contacts: [{ name: "", tel: "0870-2228888" }],
    address: "昭阳区昭通大道与金鹰大道交叉口",
    name: "紫光大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 3,
    province: "云南",
    city: "曲靖市-红开区",
    contacts: [{ name: "", tel: "0874-6066666" }],
    address: "红开区学府路与瑞和路交叉口",
    name: "云康国际大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 4,
    province: "云南",
    city: "玉溪市-红塔区",
    contacts: [{ name: "", tel: "0877-2036999" }],
    address: "红塔区玉康路与康玉路交叉路口世源综合楼",
    name: "蓝天里花园酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 5,
    province: "云南",
    city: "昆明市",
    contacts: [{ name: "", tel: "0871-65311101" }],
    address: "-",
    name: "昆明市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 6,
    province: "云南",
    city: "昭通市",
    contacts: [
      { name: "", tel: "0870-3188706" },
      { name: "", tel: "0870-3188489" }
    ],
    address: "-",
    name: "昭通市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 7,
    province: "云南",
    city: "曲靖市",
    contacts: [{ name: "", tel: "0874-3922345" }],
    address: "-",
    name: "曲靖市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 8,
    province: "云南",
    city: "玉溪市",
    contacts: [
      { name: "", tel: "0877-2989024" },
      { name: "", tel: "0877-2681596" }
    ],
    address: "-",
    name: "玉溪市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 9,
    province: "云南",
    city: "保山市",
    contacts: [{ name: "", tel: "0875-3067117" }],
    address: "-",
    name: "保山市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 10,
    province: "云南",
    city: "保山市-隆阳区",
    contacts: [{ name: "", tel: "0875-2145222" }],
    address: "隆阳区兰城街道",
    name: "望澜宾馆",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 11,
    province: "云南",
    city: "保山市-腾越镇",
    contacts: [{ name: "", tel: "0875-5197777" }],
    address: "腾越镇观音塘社区河畔小区258号",
    name: "腾冲空港观光酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 12,
    province: "云南",
    city: "保山市-腾越镇",
    contacts: [{ name: "", tel: "0875-3035777" }],
    address: "腾越镇火山社区华茂小区",
    name: "腾冲市万家灯火酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 13,
    province: "云南",
    city: "楚雄州",
    contacts: [{ name: "", tel: "0878-6086078" }],
    address: "-",
    name: "楚雄州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 14,
    province: "云南",
    city: "楚雄州-楚雄市",
    contacts: [{ name: "", tel: "0878-3212866" }],
    address: "楚雄市雄宝路",
    name: "紫云酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 15,
    province: "云南",
    city: "红河州",
    contacts: [{ name: "", tel: "0873-3055376" }],
    address: "-",
    name: "红河州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 16,
    province: "云南",
    city: "红河州-蒙自市",
    contacts: [{ name: "", tel: "0873-3179388" }],
    address: "蒙自市天马路78号",
    name: "天马大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 17,
    province: "云南",
    city: "红河州-个旧市",
    contacts: [{ name: "", tel: "0873-2222199" }],
    address: "红河哈尼族彝族自治州个旧市101县道东50米",
    name: "红河州农业科技培训服务中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 18,
    province: "云南",
    city: "红河州-开远市",
    contacts: [{ name: "", tel: "0873-7181662" }],
    address: "开远市乐白道白土墙白大段东50米",
    name: "开远市委党校宾馆",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 19,
    province: "云南",
    city: "红河州-弥勒市",
    contacts: [{ name: "", tel: "0873-8849858" }],
    address: "弥勒市弥阳镇温泉花园三期三栋",
    name: "金周温泉酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 20,
    province: "云南",
    city: "红河州-泸西县",
    contacts: [{ name: "", tel: "0873-8892111" }],
    address: "泸西县阿庐大街中段地税局旁",
    name: "金利大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 21,
    province: "云南",
    city: "红河州-建水县",
    contacts: [{ name: "", tel: "0873-3050555" }],
    address: "建水县清远路沿长路机关幼儿园往甸尾方向800米处",
    name: "建水陶窝窝度假酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 22,
    province: "云南",
    city: "红河州-石屏县",
    contacts: [{ name: "", tel: "0873-4841888" }],
    address: "石屏县汇源路与祥和街交叉路口",
    name: "天恒酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 23,
    province: "云南",
    city: "红河州-红河县",
    contacts: [{ name: "", tel: "0873-4501666" }],
    address: "红河县凹腰山",
    name: "侨乡园酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 24,
    province: "云南",
    city: "红河州-元阳县",
    contacts: [{ name: "", tel: "0873-3068888" }],
    address: "元阳县南沙镇滨河路延长线与福路交叉口",
    name: "元阳红叶温泉酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 25,
    province: "云南",
    city: "红河州-绿春县",
    contacts: [{ name: "", tel: "15087382826" }],
    address: "绿春县运政小区",
    name: "全胜宾馆",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 26,
    province: "云南",
    city: "红河州-金平县",
    contacts: [{ name: "", tel: "0873-5227888" }],
    address: "金平县环城南路18号",
    name: "绿宝西隆酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 27,
    province: "云南",
    city: "红河州-河口县",
    contacts: [{ name: "", tel: "0873-8870888" }],
    address: "河口县北山片区东西干道",
    name: "河口滇南大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 28,
    province: "云南",
    city: "红河州-屏边县",
    contacts: [{ name: "", tel: "0873-3229910" }],
    address: "屏边县玉屏镇环城南路",
    name: "大围山休闲度假酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 29,
    province: "云南",
    city: "文山州",
    contacts: [{ name: "", tel: "0876-3052014" }],
    address: "-",
    name: "文山州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 30,
    province: "云南",
    city: "文山州-文山市",
    contacts: [{ name: "", tel: "0876-2626666" }],
    address: "文山市七花北路2号",
    name: "诗达酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 31,
    province: "云南",
    city: "西双版纳州",
    contacts: [{ name: "", tel: "0691-2129850" }],
    address: "-",
    name: "西双版纳州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 32,
    province: "云南",
    city: "西双版纳州-景洪市",
    contacts: [{ name: "", tel: "0691-2152222" }],
    address: "景洪市勐泐大道曼弄枫国际会展中心",
    name: "景兰会展大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 33,
    province: "云南",
    city: "西双版纳州-勐腊县",
    contacts: [{ name: "", tel: "13888136399" }],
    address: "勐腊县勐仑镇城子村委会曼安村小组至大学城路右侧",
    name: "勐腊温水休闲酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 34,
    province: "云南",
    city: "西双版纳州-勐腊县",
    contacts: [{ name: "", tel: "13887902948" }],
    address: "勐腊县城139公交车站牌旁",
    name: "世全宾馆",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 35,
    province: "云南",
    city: "大理州",
    contacts: [{ name: "", tel: "0872-2316784" }],
    address: "-",
    name: "大理州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 36,
    province: "云南",
    city: "大理州-下关开发区",
    contacts: [{ name: "", tel: "0872-2507918" }],
    address: "下关开发区满江片区机场路洱海国际生态城5幢",
    name: "金沙半岛海景养生酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 37,
    province: "云南",
    city: "普洱市",
    contacts: [{ name: "", tel: "0879-2145370" }],
    address: "-",
    name: "普洱市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 38,
    province: "云南",
    city: "普洱市-思茅区",
    contacts: [{ name: "", tel: "13908795018" }],
    address: "思茅区南屏镇茶苑路38号",
    name: "圣安迪大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 39,
    province: "云南",
    city: "普洱市-思茅区",
    contacts: [{ name: "", tel: "0879-8872999" }],
    address: "思茅区茶苑路46号",
    name: "普洱西凤大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 40,
    province: "云南",
    city: "德宏州",
    contacts: [{ name: "", tel: "0692-2104169" }],
    address: "-",
    name: "德宏州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 41,
    province: "云南",
    city: "德宏州-芒市",
    contacts: [{ name: "", tel: "13108820175" }],
    address: "芒市大街北段17号",
    name: "芒市滇缅大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 42,
    province: "云南",
    city: "德宏州-瑞丽市",
    contacts: [{ name: "", tel: "13988296480" }],
    address: "瑞丽市姐勒村芒良寨子139号",
    name: "福康招待所",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 43,
    province: "云南",
    city: "丽江市",
    contacts: [{ name: "", tel: "0888-5158111" }],
    address: "-",
    name: "丽江市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 44,
    province: "云南",
    city: "丽江市-古城区",
    contacts: [{ name: "", tel: "13578380108" }],
    address: "古城区香格里大道北段",
    name: "大港旺宝酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 45,
    province: "云南",
    city: "丽江市-古城区",
    contacts: [{ name: "", tel: "13578380108" }],
    address: "古城区束河街道黄山居委会宏文村一组50号",
    name: "琦萍酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 46,
    province: "云南",
    city: "丽江市-玉龙县",
    contacts: [{ name: "", tel: "13988870377" }],
    address: "玉龙县丽江火车站旁",
    name: "丽庭酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 47,
    province: "云南",
    city: "丽江市-宁蒗县",
    contacts: [{ name: "", tel: "13908886146" }],
    address: "宁蒗县大兴镇清泉村56号",
    name: "王朝大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 48,
    province: "云南",
    city: "丽江市-宁蒗县",
    contacts: [{ name: "", tel: "18908883099" }],
    address: "宁蒗县大兴镇泸沽湖大道25号",
    name: "宁蒗大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 49,
    province: "云南",
    city: "怒江州",
    contacts: [{ name: "", tel: "0886-3622945" }],
    address: "-",
    name: "怒江州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 50,
    province: "云南",
    city: "怒江州-六库县",
    contacts: [{ name: "", tel: "0886-8888669" }],
    address: "六库县同心广场旁",
    name: "怒江大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 51,
    province: "云南",
    city: "迪庆州",
    contacts: [{ name: "", tel: "0887-8223786" }],
    address: "-",
    name: "迪庆州文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 52,
    province: "云南",
    city: "迪庆州-香格里拉市",
    contacts: [{ name: "", tel: "0887-8885888" }],
    address: "香格里拉市康珠大道288号",
    name: "唐香嘉秀酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 53,
    province: "云南",
    city: "临沧市",
    contacts: [{ name: "", tel: "0883-2124037" }],
    address: "-",
    name: "临沧市文化和旅游局",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 54,
    province: "云南",
    city: "临沧市-临翔区",
    contacts: [{ name: "", tel: "0883-2131788" }],
    address: "临翔区工业园区园区路399号",
    name: "云晨大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 55,
    province: "广西",
    city: "南宁市",
    contacts: [{ name: "", tel: "0771-5766835" }],
    address: "-",
    name: "南宁卫健委值班室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: "南宁市入住前须首先向南宁卫健委值班室报告"
  },
  {
    id: 56,
    province: "广西",
    city: "南宁市",
    contacts: [{ name: "", tel: "0771-2025358" }],
    address: "南宁市三塘南路82号",
    name: "乡村大世界",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "乡村大世界设为密切接触观察点；银林山庄和菩提山庄设为湖北籍来南宁市旅游的无症状人员住宿酒店价格：200元/标间，一天餐钱 65元/人，目前三家酒店均有房"
  },
  {
    id: 57,
    province: "广西",
    city: "南宁市-江南区",
    contacts: [{ name: "", tel: "0771-4886666\n0771-2184866" }],
    address: "南宁市江南区友谊路78号",
    name: "南宁市菩提山庄",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 58,
    province: "广西",
    city: "南宁市",
    contacts: [{ name: "", tel: "0771-3332223" }],
    address: "南宁市邕武路23号",
    name: "南宁市银林山庄",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 59,
    province: "广东省",
    city: "湛江市-赤坎区",
    contacts: [{ name: "", tel: "0759-3602222" }],
    address: "赤坎区康顺路23号",
    name: "燕岭新园酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "湛江市在各县（市、区）设立健康观察定点酒店作为健康管理集中监测点，对来自疫情发生地无发热症状人员实行集中健康观察14天。观察期间，旅客仅在健康观察定点酒店范围内活动。"
  },
  {
    id: 60,
    province: "广东省",
    city: "湛江市-赤坎区",
    contacts: [{ name: "", tel: "0759-3117666" }],
    address: "赤坎区洪屋下(瑞云南路南侧)",
    name: "旅泰商务酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 61,
    province: "广东省",
    city: "湛江市-霞山区",
    contacts: [{ name: "", tel: "0759-2223233" }],
    address: "霞山区建设二横路1号汇佳艺术幼儿园向100米",
    name: "嘉愉假日酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 62,
    province: "广东省",
    city: "湛江市-麻章区",
    contacts: [
      { name: "", tel: "0759-3301988" },
      { name: "", tel: "13543500265" }
    ],
    address: "麻章区瑞云中路C7-5号",
    name: "中英国际酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 63,
    province: "广东省",
    city: "湛江市-坡头区",
    contacts: [{ name: "", tel: "0759-3901505" }],
    address: "坡头区南调路808号",
    name: "南油迎宾馆",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 64,
    province: "广东省",
    city: "湛江市-开发区",
    contacts: [{ name: "", tel: "0759-2222868" }],
    address: "开发区人民大道中57号",
    name: "本舍",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 65,
    province: "广东省",
    city: "湛江市-廉江市",
    contacts: [
      { name: "", tel: "0759-6618888" },
      { name: "", tel: "18022630000" }
    ],
    address: "廉江市廉城镇中山四路2号",
    name: "丽波公寓",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 66,
    province: "广东省",
    city: "湛江市-遂溪县",
    contacts: [{ name: "", tel: "15875995334" }],
    address: "遂溪县茶亭村螺岗小镇旅游区",
    name: "螺岗小镇",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 67,
    province: "广东省",
    city: "湛江市-吴川市",
    contacts: [{ name: "", tel: "0759-5131008" }],
    address: "吴川市覃巴镇吉兆湾省级旅游度假区",
    name: "汇景湾度假村",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 68,
    province: "广东省",
    city: "湛江市-吴川市",
    contacts: [{ name: "", tel: "0759-5133088" }],
    address: "吴川市覃巴镇吉兆湾省级旅游度假区",
    name: "裕康度假村",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 69,
    province: "广东省",
    city: "湛江市-雷州市",
    contacts: [{ name: "", tel: "0759-8334488" }],
    address: "雷州市雷城镇广海北路8号",
    name: "华侨假日大酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 70,
    province: "广东省",
    city: "湛江市-徐闻县",
    contacts: [{ name: "", tel: "0759- 4876333" }],
    address: "徐闻县207国道海安段西侧",
    name: "徐闻县华通酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 71,
    province: "湖南省",
    city: "长沙市",
    contacts: [
      { name: "", tel: "0731-88666312" },
      { name: "", tel: "0731-88666431" }
    ],
    address: "-",
    name: "长沙市防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "为确保每一位需要帮助的滞留旅客获得切实的帮助，还请致电给各区防疫领导小组。"
  },
  {
    id: 72,
    province: "湖南省",
    city: "长沙市",
    contacts: [{ name: "", tel: "0731-84792176" }],
    address: "-",
    name: "长沙市疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 73,
    province: "湖南省",
    city: "长沙市-芙蓉区",
    contacts: [{ name: "", tel: "0731-84885772" }],
    address: "-",
    name: "芙蓉区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 74,
    province: "湖南省",
    city: "长沙市-芙蓉区",
    contacts: [{ name: "", tel: "0731-84432914" }],
    address: "-",
    name: "芙蓉区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 75,
    province: "湖南省",
    city: "长沙市-天心区",
    contacts: [{ name: "", tel: "0731-85899201" }],
    address: "-",
    name: "天心区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 76,
    province: "湖南省",
    city: "长沙市-天心区",
    contacts: [{ name: "", tel: "0731-85286911" }],
    address: "-",
    name: "天心区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 77,
    province: "湖南省",
    city: "长沙市-岳麓区",
    contacts: [{ name: "", tel: "0731-88999585" }],
    address: "-",
    name: "岳麓区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 78,
    province: "湖南省",
    city: "长沙市-岳麓区",
    contacts: [{ name: "", tel: "0731-88940736" }],
    address: "-",
    name: "岳麓区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 79,
    province: "湖南省",
    city: "长沙市-开福区",
    contacts: [{ name: "", tel: "0731-84558342" }],
    address: "-",
    name: "开福区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 80,
    province: "湖南省",
    city: "长沙市-开福区",
    contacts: [{ name: "", tel: "0731-84310097" }],
    address: "-",
    name: "开福区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 81,
    province: "湖南省",
    city: "长沙市-雨花区",
    contacts: [{ name: "", tel: "0731-85880843" }],
    address: "-",
    name: "雨花区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 82,
    province: "湖南省",
    city: "长沙市-雨花区",
    contacts: [{ name: "", tel: "0731-85880852" }],
    address: "-",
    name: "雨花区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 83,
    province: "湖南省",
    city: "长沙市-望城区",
    contacts: [{ name: "", tel: "0731-88062166" }],
    address: "-",
    name: "望城区防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 84,
    province: "湖南省",
    city: "长沙市-望城区",
    contacts: [{ name: "", tel: "0731-88075708" }],
    address: "-",
    name: "望城区疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 85,
    province: "湖南省",
    city: "长沙市-长沙县",
    contacts: [{ name: "", tel: "0731-84011448" }],
    address: "-",
    name: "长沙县防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 86,
    province: "湖南省",
    city: "长沙市-长沙县",
    contacts: [{ name: "", tel: "0731-84015725" }],
    address: "-",
    name: "长沙县疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 87,
    province: "湖南省",
    city: "长沙市-浏阳市",
    contacts: [{ name: "", tel: "0731-83611958" }],
    address: "-",
    name: "浏阳市防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 88,
    province: "湖南省",
    city: "长沙市-浏阳市",
    contacts: [{ name: "", tel: "0731-83612510" }],
    address: "-",
    name: "浏阳市疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 89,
    province: "湖南省",
    city: "长沙市-宁乡市",
    contacts: [{ name: "", tel: "0731-87881439" }],
    address: "-",
    name: "宁乡市防病工作领导小组办公室",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 90,
    province: "湖南省",
    city: "长沙市-宁乡市",
    contacts: [{ name: "", tel: "0731-81830729" }],
    address: "-",
    name: "宁乡市疾控中心",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 91,
    province: "海南省",
    city: "海口市",
    contacts: [{ name: "", tel: "0898-31299000" }],
    address: "龙华区龙昆南路158号",
    name: "佳捷精品酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "1月25日起，对来自湖北尤其是武汉的过海登岛旅客，在机场、码头等地进行定点监测，部分游客将会被送往定点酒店，进行集中医学观察14天。酒店食宿费用全免。"
  },
  {
    id: 92,
    province: "海南省",
    city: "海口市",
    contacts: [{ name: "", tel: "0898-65716601" }],
    address: "美兰区美演路富康居家私广场正对面（近国际机场）",
    name: "波翼酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 93,
    province: "海南省",
    city: "海口市",
    contacts: [{ name: "", tel: "0898-65716691" }],
    address: "美兰区美兰花园正对面（近国际机场）",
    name: "空翼酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 94,
    province: "海南省",
    city: "海口市",
    contacts: [{ name: "", tel: "0898-66515678" }],
    address: "琼山区博雅路 528-1号",
    name: "佳捷商务酒店",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark: null
  },
  {
    id: 95,
    province: "陕西省",
    city: "西安市",
    contacts: [
      { name: "", tel: "029-89820896" },
      { name: "", tel: "029-87448052" },
      { name: "", tel: "029-89821003" },
      { name: "", tel: "029-89820877" }
    ],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 96,
    province: "陕西省",
    city: "西安市-新城区",
    contacts: [{ name: "", tel: "029-87389738" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 97,
    province: "陕西省",
    city: "西安市-碑林区",
    contacts: [{ name: "", tel: "029-89625362" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 98,
    province: "陕西省",
    city: "西安市-莲湖区",
    contacts: [{ name: "", tel: "029-87408732\n029-87349311" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 99,
    province: "陕西省",
    city: "西安市-雁塔区",
    contacts: [{ name: "", tel: "029-89353633" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 100,
    province: "陕西省",
    city: "西安市-灞桥区",
    contacts: [{ name: "", tel: "029-62739000" }],
    address: "-",
    name: null,
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 101,
    province: "陕西省",
    city: "西安市-未央区",
    contacts: [{ name: "", tel: "029-89572210\n029-86278488" }],
    address: "-",
    name: null,
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 102,
    province: "陕西省",
    city: "西安市-阎良区",
    contacts: [{ name: "", tel: "029-86203166" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 103,
    province: "陕西省",
    city: "西安市-临潼区",
    contacts: [{ name: "", tel: "029-83812650\n029-68022694" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 104,
    province: "陕西省",
    city: "西安市-长安区",
    contacts: [{ name: "", tel: "029-89058849" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 105,
    province: "陕西省",
    city: "西安市-高陵区",
    contacts: [{ name: "", tel: "029-86092997" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 106,
    province: "陕西省",
    city: "西安市-鄂邑区",
    contacts: [{ name: "", tel: "029-84822345" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 107,
    province: "陕西省",
    city: "西安市-蓝田县",
    contacts: [{ name: "", tel: "029-82751853\n18192492665" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 108,
    province: "陕西省",
    city: "西安市-周至县",
    contacts: [{ name: "", tel: "029-63615911\n029-63615910" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 109,
    province: "陕西省",
    city: "西安市-西咸新区",
    contacts: [
      { name: "电话", tel: "029-89108026" },
      { name: "沣东新城", tel: "029-38020871" },
      { name: "沣西新城", tel: "18690080050" },
      { name: "秦汉新城", tel: "029-33636573" },
      { name: "空港新城", tel: "029-36380085" },
      { name: "泾河新城", tel: "029-33350481" }
    ],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 110,
    province: "陕西省",
    city: "西安市-高新区",
    contacts: [{ name: "", tel: "029-81150215" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 111,
    province: "陕西省",
    city: "西安市-经开区",
    contacts: [{ name: "", tel: "029-83660981" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 112,
    province: "陕西省",
    city: "西安市-曲江新区",
    contacts: [{ name: "", tel: "029-68660120" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 113,
    province: "陕西省",
    city: "西安市-沪灞生态区",
    contacts: [{ name: "", tel: "029-83626530\n029-83626536" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 114,
    province: "陕西省",
    city: "西安市-阎良航空基地",
    contacts: [
      { name: "白天", tel: "029-89083668" },
      { name: "晚上", tel: "029-86855308" }
    ],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 115,
    province: "陕西省",
    city: "西安市-航天基地",
    contacts: [{ name: "", tel: "029-87560613" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  },
  {
    id: 116,
    province: "陕西省",
    city: "西安市-国际港务区",
    contacts: [{ name: "", tel: "029-83332106" }],
    address: "-",
    name: "-",
    date: "2020-01-27T16:00:00.000Z",
    url: "http://wlj.wuhan.gov.cn/html/gsgg/20200128/13301.html",
    remark:
      "西安市目前有22个区、县提供集中住宿酒店，具体酒店和入住条件请拨打各区、县电话咨询"
  }
];

export { hotelData };
