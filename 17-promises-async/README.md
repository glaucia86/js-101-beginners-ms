# Código Assíncrono

O desenvolvimento de aplicativos modernos envolve a comunicação com outros sistemas. Essas comunicações podem levar algum tempo e podem fazer com que seu aplicativo pare e não consiga realizar outras operações.

JavaScript é capaz de gerenciar operações de longa duração por meio do uso de promises. Uma promessa é semelhante a um [IOU](https://wikipedia.org/wiki/IOU);; o código promete que avisará quando for concluído e executará a função fornecida. Você pode usar promises diretamente para especificar como deseja que seu código responda quando uma chamada para um sistema remoto retornar.

Recentemente, surgiu um novo padrão. Com base em promises, `async`/`await` permite que você crie um código que parece síncrono, mas é assíncrono. Isso ajuda a tornar o código mais legível ao mesmo tempo que permite um melhor desempenho.

## Leituras Adicionais

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
