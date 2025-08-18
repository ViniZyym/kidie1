import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">30 Dias Sem Telas</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O método finlandês que está transformando famílias ao redor do Brasil. 
              Reconecte-se com seus filhos através de atividades criativas e divertidas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kidie.educa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579068215684" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kidieeduca@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+55 51 8101-5992</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
              <h5 className="font-semibold text-purple-300 mb-2">Atendimento</h5>
              <p className="text-sm text-gray-300">
                Segunda à Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 30 Dias Sem Telas. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com 💜 para famílias que querem se reconectar
          </p>
        </div>
      </div>
    </footer>
  );
}