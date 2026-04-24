
export default function SemResultados() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      border: '2px solid #E3350D',
      borderRadius: '12px',
      padding: '28px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
      textAlign: 'left'
    }}>
      <h3 style={{
        color: '#E3350D',
        fontSize: '22px',
        fontWeight: '400',
        marginBottom: '24px',
        marginTop: 0,
        textAlign: 'center'
      }}>
        Nenhum Pokémon corresponde à sua pesquisa!
      </h3>
      <p style={{
        color: '#5a5a5a',
        fontSize: '16px',
        marginBottom: '12px'
      }}>
        Experimente estas sugestões para encontrar um Pokémon:
      </p>
      <ul style={{
        color: '#5a5a5a',
        fontSize: '16px',
        paddingLeft: '32px',
        margin: 0,
        lineHeight: '1.8',
        listStyleType: 'disc'
      }}>
        <li style={{ paddingLeft: '8px' }}>Reduza o número de parâmetros de pesquisa.</li>
        <li style={{ paddingLeft: '8px' }}>Procure apenas por um tipo de Pokémon de cada vez.</li>
      </ul>
    </div>
  );
}