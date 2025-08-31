import ping from "ping";
import chalk from "chalk";

const minutos = 14;
const urlApi = process.env.URL_API || ""

const calcTemp = (temp: number) => temp * 60000;

async function execultarPing() {
  ping.promise.probe(urlApi).then((res) => {
    if (res.alive !== false) {
      console.log(
        `${chalk.green("Ping:")} ${chalk.yellow("{")} ${chalk.blue("Host:")} ${
          chalk.green(res.host)
        }, ${chalk.blue("Ativo?:")} ${res.alive? chalk.green("Sim"): chalk.red("Não")}, ${chalk.blue("Tempo:")} ${
          chalk.green(res.time)
        }, ${chalk.blue("Data e Hora:")} ${chalk.green(new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString())} ${chalk.yellow("}")}`
      );
    } else {
      console.log(chalk.red("Ping Falhou..."));
    }
  });
}
console.log(chalk.bold.green("-- [ AUTO-PING ] --\n"));
console.log(chalk.blue("Iniciando..."));
execultarPing();

setInterval(() => {
  execultarPing();
}, calcTemp(minutos));
