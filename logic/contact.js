const messageTextArea = document.getElementById('message');

messageTextArea.addEventListener('input', () => {
  messageTextArea.style.height = 'auto'; // Reset the height
  messageTextArea.style.height = `${messageTextArea.scrollHeight}px`; // Set the height based on content
});
