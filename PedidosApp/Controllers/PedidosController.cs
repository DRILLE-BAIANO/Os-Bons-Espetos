using Microsoft.AspNetCore.Mvc;
using PedidosApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace PedidosApp.Controllers
{
    public class PedidosController : Controller
    {
        private static List<ItemPedido> pedidoAtual = new List<ItemPedido>();

        public IActionResult Index()
        {
            return View(pedidoAtual);
        }

        public IActionResult Adicionar(int id, string nome, decimal preco)
        {
            var existente = pedidoAtual.FirstOrDefault(p => p.Produto.Id == id);
            if (existente != null)
            {
                existente.Quantidade++;
            }
            else
            {
                pedidoAtual.Add(new ItemPedido
                {
                    Produto = new Produto { Id = id, Nome = nome, Preco = preco },
                    Quantidade = 1
                });
            }
            return RedirectToAction("Index");
        }

        public IActionResult Remover(int id)
        {
            var item = pedidoAtual.FirstOrDefault(p => p.Produto.Id == id);
            if (item != null)
                pedidoAtual.Remove(item);

            return RedirectToAction("Index");
        }
    }
}
