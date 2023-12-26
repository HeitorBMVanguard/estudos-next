

export  async function Repos(){
    await new Promise(resolve => setTimeout(resolve, 2000))
  // componente demora 2 segundos a mais para renderizarS

    const response = await fetch('https://api.github.com/users/HeitorBMarini/repos', {
      //cache : 'no-store' - a cada novs requisição, não fica cache de outro usuário
      cache : 'no-store'
  })
  
    const repos = await response.json()
  
  
    return(
      <div>
        <h1 className="bg-blue-100 "> Repos</h1>
        <pre>{JSON.stringify(repos, null, 2)}</pre>
        
  
      </div>
        
    )
  }