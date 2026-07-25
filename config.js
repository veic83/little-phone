(function(){
  var KEY = 'lil_phone_cfg';
  var saved = null;
  try{ var raw = localStorage.getItem(KEY); if(raw) saved = JSON.parse(raw); }catch(e){}

  if(saved && saved.su && saved.sk && saved.dk && saved.ep && saved.mn){
    window.SUPABASE_URL = saved.su;
    window.SUPABASE_KEY = saved.sk;
    window.MODELS = {};
    window.MODELS[saved.mn] = {
      name: saved.mn,
      endpoint: saved.ep,
      key: saved.dk,
      model: saved.mn
    };
    window.DEFAULT_MODEL = saved.mn;
    window.THEME = saved.th || { accent:'#3b82f6', mode:'dark' };
    window.MCP_URL = saved.mu || '';
    window.MCP_HEADERS = saved.mh || {};
    return;
  }

  var page = location.pathname.split('/').pop() || 'home.html';
  if(page !== 'setup.html'){
    location.href = 'setup.html?from=' + encodeURIComponent(page);
  }
})();
