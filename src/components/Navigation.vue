<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">kogs</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-bind:class="{ active: navItems.HomeIsActive }">
            <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.CybersecurityIsActive }">
            <a class="nav-link" href="/#/kogs">Kogs</a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.BlockchainIsActive }">
            <a class="nav-link" href="/#/login">Login <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.BlockchainIsActive }">
            <a class="nav-link" href="/#/logout">Logout <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.BlockchainIsActive }">
            <a class="nav-link" href="/#/about">About <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>


  </div>
</template>

<script>

export default {
  name: 'Navigation',
  methods : {
    getNavigation : function(){
      var path = this.$route.path;
      path = path.split('/');
      path = path[1];

      var navItems = {
        HomeIsActive  : false,
        KogsIsActive  : false,
        LoginIsActive : false,
        LogoutIsActive: false,
        AboutIsActive : false,
      };

      navItems.HomeIsActive  = (!path                   ) ? true : false;
      navItems.KogsIsActive  = (path === 'blockchain'   ) ? true : false;
      navItems.LoginIsActive = (path === 'cybersecurity') ? true : false;
      navItems.LogoutIsActive= (path === 'ai'           ) ? true : false;
      navItems.AboutIsActive = (path === 'cloud'        ) ? true : false;

      // return active path
      return navItems;
    }
  },    
  data: function(){
    var navItems = this.getNavigation();    
    return { navItems };  
  },
  watch:{
      $route (to, from){
          var navItems = this.getNavigation();
          //console.log('in components/blockchain/navigation data path: ' + JSON.stringify(navItems));
          this.navItems = navItems;
      }
  }    

}
</script>