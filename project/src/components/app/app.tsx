import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {

  errorsCount: number;

}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen errorsCount={errorsCount} />
  );
}

export default App;
