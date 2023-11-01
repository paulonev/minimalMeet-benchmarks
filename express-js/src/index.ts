import app from './app';

app.listen(app.get('port'), () => {
  console.info(`Express server listening on http://localhost:${app.get('port')}`);
});
