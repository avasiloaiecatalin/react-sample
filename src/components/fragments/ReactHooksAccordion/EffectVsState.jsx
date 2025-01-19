import { Separator } from '@/components/ui/separator';

export const EffectVsState = () => {
  return (
    <>
      <h4>Cu ce se ocupa?</h4>
      <br />
      <b>useState:</b> Se ocupa de starea locala a componentelor.
      <br />
      <b>useEffect:</b> Gestioneaza efecte secundare.
      <Separator className='my-4' />
      <h4>Cand se apeleaza?</h4>
      <br />
      <b>useState:</b> Se apeleaza in timpul randarii componentei pe ecran.
      <br />
      <b>useEffect:</b> Se apeleaza dupa ce componenta a fost randata pe ecran.
      <Separator className='my-4' />
      <h4>La ce se foloseste?</h4>
      <br />
      <b>useState:</b> Pentru a stoca si actualiza date intr-o componenta.
      <br />
      <b>useEffect:</b> Pentru operatii care au efecte secundare (ex.: Fetch de
      date, modificari in strcutura paginii).
    </>
  );
};
