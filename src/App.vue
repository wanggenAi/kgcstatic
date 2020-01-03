<template>
  <div id="app">
	  <nav class="navbar navbar-default navbar-fixed-top header">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse" aria-expanded="false">
                <span class="sr-only">实验楼</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img src="/static/img/logo_03.png">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="header-navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="dropdown ">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                        课程
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="" href="courses/index.html" >全部课程</a></li>
                        <li><a class="" href="courses/index.html?status=preview" >即将上线</a></li>
                        <li><a class="" href="developer/index.html">开发者</a></li>
                    </ul>
                </li>
                <li class="">
                    <a href="paths/index.html">路径</a>
                </li>
                <li class="">
                    <a href="questions/index.html">讨论区</a>
                </li>
                <li class=" bootcamp new-nav logo-1111">
                    <a href="bootcamp/index.html">训练营</a>
                    
                </li>
                <li class=" new-nav logo-1111">
                    <a href="vip/index.html">会员</a>
                    
                </li>
                
            </ul>

            
            <div class="navbar-right btns">
                <a @click="clogin" class="btn btn-default navbar-btn sign-in" data-sign="signin" href="#sign-modal" data-toggle="modal">登录</a>
                <a @click="creg" class="btn btn-default navbar-btn sign-up" data-sign="signup" href="#sign-modal" data-toggle="modal">注册</a>
            </div>
            

            <form class="navbar-form navbar-right" action="search" method="get" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" name="search" autocomplete="off" placeholder="搜索 课程/问答">
                </div>
            </form>
        </div>
    </div>
</nav>
<div class="modal fade" id="sign-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <button type="button" class="close-modal" ref="closemodal" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation">
                        <a ref="custlogin" href="#signin-form" aria-controls="signin-form" role="tab" data-toggle="tab">登录</a>
                    </li>
                    <li role="presentation">
                        <a ref="custregs" href="#signup-form" aria-controls="signup-form" role="tab" data-toggle="tab">注册</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="signin-form">
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-earphone" style="margin:0;"></i>
                                    </div>
                                    <input type="tel" v-model="userName" class="form-control" placeholder="用户名" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock" style="margin:0;"></i>
                                    </div>
                                    <input type="password" v-model="password" class="form-control" placeholder="密码" required>
                                </div>
                                <div class="help-block text-left">{{msgError}}</div>
                            </div>
                            <!-- <div class="form-inline verify-code-item" style="display:none;">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" name="captcha_v" class="form-control" placeholder="请输入验证码" required>
                                    </div>
                                </div>
                                <img class="verify-code" src="" source="https://www.shiyanlou.com/captcha.gif">
                            </div> -->
                            <div class="form-group remember-login">
                                <input name="remember" type="checkbox" value="y"> 下次自动登录
                                <a class="pull-right" href="reset_password/index.html">忘记密码？</a>
                            </div>
                            <div class="form-group">
                                <input @click.prevent="kgcLogin" class="btn btn-primary" name="submit" value="进入实验楼" readonly>
                            </div>
                            <div class="form-group widget-signin">
                                <span>快速登录</span>
                                <a href="/auth/qq?next="><i class="fa fa-qq"></i></a>
                                <a href="/auth/weibo?next="><i class="fa fa-weibo"></i></a>
                                <a href="/auth/weixin?next="><i class="fa fa-weixin"></i></a>
                                <a href="/auth/github?next="><i class="fa fa-github"></i></a>
                                <a href="/auth/renren?next="><i class="fa fa-renren"></i></a>
                            </div>
                            <div class="form-group error-msg">
                                <div class="alert alert-danger" role="alert"></div>
                            </div>
                        </form>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="signup-form">
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-earphone" style="margin:0;"></i>
                                    </div>
                                    <input @blur="regUserName" type="text" v-model="kgcuser.userName" class="form-control" placeholder="请输入手机或邮箱" required>
                                    <div class="help-block text-left"></div>
                                </div>
                                <div class="help-block text-left">{{usernameErr}}</div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock" style="margin:0;"></i>
                                    </div>
                                    <input @blur="regPassword" type="password" v-model="kgcuser.password" class="form-control" placeholder="请输入密码" required>
                                </div>
                                <div class="help-block text-left">{{passwordErr}}</div>
                            </div>
                            <div class="form-inline">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" v-model="kgcuser.code" class="form-control" placeholder="请输入验证码" required>      
                                    </div>
                                </div>
                
                                <button v-show="show" @click.stop.prevent="getCode">获取验证码</button>
                                <button style="background-color:lightgrey" disabled v-show="!show" @click.stop.prevent="getCode">{{count}}秒后重新获取</button>
                                <div class="help-block text-left">{{codeErr}}</div>
                            </div>
                            <div class="form-group">
                                <input @click.prevent="registUser" class="btn btn-primary" name="submit" type="submit" value="注册">
                            </div>
                            <div class="form-group agree-privacy">
                                注册表示您已经同意我们的<a href="privacy/index.html" target="_blank">隐私条款</a>
                            </div>
                            <div class="form-group widget-signup">
                                <span>快速注册</span>
                                <a href="/auth/qq?next="><i class="fa fa-qq"></i></a>
                                <a href="/auth/weibo?next="><i class="fa fa-weibo"></i></a>
                                <a href="/auth/weixin?next="><i class="fa fa-weixin"></i></a>
                                <a href="/auth/github?next="><i class="fa fa-github"></i></a>
                                <a href="/auth/renren?next="><i class="fa fa-renren"></i></a>
                            </div>
                            <div class="form-group error-msg">
                                <div class="alert alert-danger" role="alert"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    <router-view ref="child" :uid="uid"></router-view>
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 clearfix footer-col">
                <img src="/static/img/logo_03.png">
                <div class="footer-slogan">动手做实验，轻松学编程</div>
                <div class="col-xs-2">
                    <div class="social-item footer-weixin-item">
                        <i class="fa fa-weixin"></i>
                        <div class="footer-weixin">
                            <img src="/static/img/footer-weixin.png">
                        </div>
                    </div>
                </div>
                <div class="col-xs-2">
                    <div class="social-item footer-qq-item">
                        <i class="fa fa-qq"></i>
                    </div>
                </div>
                <div class="col-xs-2">
                    <div class="social-item footer-weibo-item">
                        <a href="http://weibo.com/shiyanlou2013" target="_blank">
                            <i class="fa fa-weibo"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                <div class="col-title">公司</div>
                <a href="privacy/index.html" target="_blank">关于我们</a><br>
                <a href="privacy/index.html" target="_blank">联系我们</a><br>
                <a href="http://www.simplecloud.cn/jobs.html" target="_blank">加入我们</a><br>
                <a href="https://blog.shiyanlou.com" target="_blank">技术博客</a><br>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                <div class="col-title">合作</div>
                <a href="privacy/index.html" target="_blank">我要投稿</a><br>
                <a href="labs/index.html" target="_blank">教师合作</a><br>
                <a href="edu/index.html" target="_blank">高校合作</a><br>
                <a href="privacy/index.html" target="_blank">友情链接</a>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                <div class="col-title">服务</div>
                <a href="bootcamp/index.html" target="_blank">实战训练营</a><br>
                <a href="vip/index.html" target="_blank">会员服务</a><br>
                <a href="courses/reports.html" target="_blank">实验报告</a><br>
                <a href="questions/index.html?tag=%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98" target="_blank">常见问题</a><br>
                <a href="privacy/index.html" target="_blank">隐私条款</a>
            </div>
            <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                <div class="col-title">学习路径</div>
                <a href="paths/index.html" target="_blank">Python学习路径</a><br>
                <a href="paths/index.html" target="_blank">Linux学习路径</a><br>
                <a href="paths/index.html" target="_blank">大数据学习路径</a><br>
                <a href="paths/index.html" target="_blank">Java学习路径</a><br>
                <a href="paths/index.html" target="_blank">PHP学习路径</a><br>
                <a href="paths/index.html" target="_blank">全部</a>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
  name: 'App',
  data () {
	  return {
		show:true,
        count:"",
        timer:null,
        // post请求数据
        kgcuser:{
            userName:"",
            password:"",
            code:"",
        },
        usernameErr:"",
        passwordErr:"",
        codeErr:"",
        userName:"",
        password:"",
        isOk: true,
        uid: "",
        msgError:"",
	  }
  },
  components: {

  },
  methods:{
      clogin(){
          this.kgcuser = {};
          this.userName = "";
          this.password = "";
          this.usernameErr = "";
          this.passwordErr = "";
          this.isOk = false;
          this.msgError = "";
          this.$refs.custlogin.click();
      },
      creg(){
          this.kgcuser = {};
          this.userName = "";
          this.password = "";
          this.usernameErr = "";
          this.passwordErr = "";
          this.isOk = false;
          this.msgError = "";
          this.$refs.custregs.click();
      },
      getCode(){
          if(!this.isOk){
              return;
          }
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000)
        }
        this.$http.post('sendVerifyCode.do',{userName:this.kgcuser.userName}).then(
            function(res){
                // console.log(res);
            }
        )
      },
      

      // 注册用户名验证
      regUserName(){
          if(this.kgcuser.userName.indexOf('@')==-1){
              // 手机号验证
              let regPhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
              if(!regPhone.test(this.kgcuser.userName)){
                  this.usernameErr = "手机号格式不正确";
                  this.isOk = false
                  return;
              }
          }else{
              let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
              if(!regEmail.test(this.kgcuser.userName)){
                  this.usernameErr = "邮箱格式不正确";
                  this.isOk = false;
                  return;
              }
          }
          // 调用接口查询该用户名是否存在
          this.$http.post('isExistUser.do',{
              userName: this.kgcuser.userName
          }).then(function(res){
              if(res.body.code=="200"){
                  this.usernameErr = res.body.msg;
                  this.isOk = false;
                  return;
              }
          })           
          this.usernameErr = "";
          this.isOk = true;
      },
      // 密码验证
      regPassword(){
          let regPwd = /(?=.*[\d])?(?=.*[a-zA-Z])(?=.*[\d]){6,20}/;
          if(!regPwd.test(this.kgcuser.password)){
              this.passwordErr ="密码长度不得小于6位或者超过20位,且必须包含数字和字母";
              this.isOk = false;
              return;
          } 
          this.passwordErr = "";
          this.isOk = true;
      },
      // 用户注册
      registUser(){
          if(!this.isOk){
              return;
          }
          let kgcuser = {
              userName: this.kgcuser.userName,
              password: this.kgcuser.password,
              verifyCode: this.kgcuser.code
          }
          this.$http.post('registUser.do',kgcuser).then(function(res){
              if(res.body.code == "500"){
                this.isOk = false;
                this.codeErr = res.body.data.verifyCode;
                console.log(this.$refs.signmodel);
                return;
              }
            //   console.log(res);
            this.codeErr = "";
            this.isOk = true;
            this.uid = res.body.data;
            this.$refs.closemodal.click();
            this.$router.push("/kgcIndex");
          })
      },
      // 用户登录
      kgcLogin(){
          this.$http.post('login.do',{userName:this.userName,password:this.password}).then(function(res){
              if(res.body.code=="500"){
                  this.msgError = res.body.msg;
                  return;
              }
              this.uid = res.body.data;
              this.msgError = "";
              this.$refs.closemodal.click();
              this.$router.push("/kgcIndex");
          })
      }
  },
}
</script>

<style>
.navbar-banner {
    margin-top: 50px;
    background: url("/static/img/homepage-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
}  
@font-face {
			font-family: "lantingxihei";
			src:url('/static/fonts/FZLTCXHJW.TTF');
}

</style>
