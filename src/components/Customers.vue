<template>
<div id="customers">
  <div class="navbar-banner layout-no-margin-top">
    <div class="banner-container">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <a class="container-title">
                        <img src="/static/img/container-title-2.png" />
                    </a>
                    <div style="margin-top:24px;">
                        <a id="course-btn" class="course-btn btn btn-lg" href="courses/index.html">进入课程</a>
                    </div>
                </div>
                
                <div class="col-md-5">
                    
                    <form action="/quickregister" method="post">
                        <div class="form-group">
                            <input class="form-control" name="nickname" id="name" type="text" placeholder="昵称">
                            <div class="help-block text-left"></div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="userName" placeholder="邮箱/手机号">
                            <div class="help-block text-left"></div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="password" id="password" type="password" placeholder="密码">
                            <div class="help-block text-left"></div>
                        </div>
                        <button class="btn register" type="submit">加入实验楼</button>
                        <p class="tip">点击"加入实验楼"，表示您已经同意我们的<a href="privacy/index.html" target="_blank"> 隐私条款</a></P>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>   
</div>



</div>    
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
        
    }
  },
  methods: {
      
  },
  components: {

  },
}
</script>

<style scoped>
 

</style>
