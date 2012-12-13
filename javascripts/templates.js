(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['topic'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"topic topic_line\">\n  <div class=\"pull-left avatar\">\n    <a href=\"http://ruby-china.org/";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.login;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" rel=\"userpopover\" class=\"user_avatar\" target=\"_blank\"><img src=\"";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.avatar_url;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" style=\"width:28px;height:28px;\"></a>\n  </div>\n  <div class=\"right_info\">\n    <div class=\"pull-right replies\">\n        <a href=\"http://ruby-china.org/topics/";
  foundHelper = helpers._id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "#reply30\" class=\"count state_false\" rel=\"twipsy\" target=\"_blank\" >";
  foundHelper = helpers.replies_count;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.replies_count; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n    </div>\n    <div class=\"infos\">\n      <div class=\"title\">\n          <a href=\"http://ruby-china.org/topics/";
  foundHelper = helpers._id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" title=\"${title}\" target=\"_blank\">";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n      </div>\n      <div class=\"info leader\">\n      <a href=\"http://ruby-china.org/topics/node";
  foundHelper = helpers.node_id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.node_id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  foundHelper = helpers.node_name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.node_name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>  •\n      <a href=\"http://ruby-china.org/";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.login;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.login;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</a>\n         •\n      <abbr class=\"timeago\" title=\"";
  foundHelper = helpers.created_at;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.created_at;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</abbr>\n      </div>\n      <div class=\"info time\">\n          最后由 <a href=\"http://ruby-china.org/";
  foundHelper = helpers.last_reply_user_login;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.last_reply_user_login; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" target=\"_blank\">";
  foundHelper = helpers.last_reply_user_login;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.last_reply_user_login; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a> <abbr class=\"timeago\" title=\"";
  foundHelper = helpers.replied_at;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.replied_at; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.replied_at;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.replied_at; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</abbr> 回复\n\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;});
})();