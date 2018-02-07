$(function() {
  $('.subtasking-summary.parent-issue-card > .parent-issue-card__summary').bind('DOMSubtreeModified', function() {
    var parent_title = $(this).text().replace(/^#+\s+/, '');
    var $issue = $('#summaryInput');
    var issue_title = $issue.val().replace(/^.+[:：]/, '');

    if (parent_title.length > 0) issue_title = parent_title +  '：' + issue_title;
    $issue.val(issue_title);
  });
});
