// config
var path = require('path');

var config = {
  debug: true,

  get mini_assets() { return !this.debug; }, 

  name: 'CNJS', // 社区名字
  description: 'CNJS中文社区', // 社区的描述
  keywords: 'nodejs, node, JavaScript, TypeScript',

  site_headers: [
    '<meta name="author" content="" />'
  ],
  site_logo: '/public/images/cnodejs_light.svg',
  site_icon: '/public/images/cnode_icon_32.png',
  site_navs: [
    [ '/about', '关于' ]
  ],
  site_static_host: '', 
  // 社区的域名
  host: 'localhost',
  google_tracker_id: '',
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'cnjs_test_secret', 
  auth_cookie_name: 'node_club',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  rss: {
    title: 'CNJS中文社区',
    link: 'http://cnjs.asmodeus.cn',
    language: 'zh-cn',
    description: 'CNJS中文社区',
    max_rss_items: 50
  },

  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'test@126.com',
      pass: 'club'
    },
    ignoreTLS: true,
  },

  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  admins: { 'admin': true },

  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'your GITHUB_CALLBACK_URL'
  },
  allow_sign_up: true,

  oneapm_key: '',

  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    uploadURL: 'http://xxxxxxxx',
  },

  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘'],
  ],

  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 1000, 
  create_reply_per_day: 1000, 
  create_user_per_ip: 1000,
  visit_per_day: 1000,
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
