(function(){
  var KEY = 'lil_phone_cfg';
  var saved = null;
  try{ var raw = localStorage.getItem(KEY); if(raw) saved = JSON.parse(raw); }catch(e){}

  if(saved && saved.su && saved.sk && saved.dk){
    window.SUPABASE_URL = saved.su;
    window.SUPABASE_KEY = saved.sk;
    window.MODELS = {
      deepseek: {
        name: 'DeepSeek',
        endpoint: 'https://api.deepseek.com/v1/chat/completions',
        key: saved.dk,
        model: 'deepseek-v4-flash'
      }
    };
    window.DEFAULT_MODEL = 'deepseek';
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
