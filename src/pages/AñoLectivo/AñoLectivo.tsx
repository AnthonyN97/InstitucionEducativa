import TimeLineCronograma from '../../components/TimeLineCronograma/TimeLineCronograma';

const AñoLectivo: React.FC = () => {
    return (
        <div className='p-5'>
            <h1 className="text-3xl font-bold mb-4 text-center py-3">
                Cronograma de años anteriores
            </h1>
        <TimeLineCronograma/>
        </div>
    );
}
export default AñoLectivo;