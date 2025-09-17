// Abstract Factory
// Produtos - Botões
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  // Produtos - Janelas
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }
  
  // Abstract Factory
  class UIFactory {
    createButton() {}
    createWindow() {}
  }
  
  // Concrete Factory - Tema Claro
  class LightFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
    createWindow() {
      return new LightWindow();
    }
  }
  
  // Concrete Factory - Tema Escuro
  class DarkFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
    createWindow() {
      return new DarkWindow();
    }
  }
  
  // Client
  const theme = "dark";
  let factory;
  
  if (theme === "light") {
    factory = new LightFactory();
  } else {
    factory = new DarkFactory();
  }
  
  const button = factory.createButton();
  const windowUI = factory.createWindow();
  
  console.log(button.render());
  console.log(windowUI.render());
  
