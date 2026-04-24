import React from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function SkillsAboutContact() {
  const skills = [
    { name: 'Adobe Photoshop', icon: 'Ps', color: '#31A8FF', percentage: '95%' },
    { name: 'Adobe Illustrator', icon: 'Ai', color: '#FF9A00', percentage: '90%' },
    { name: 'Adobe After Effects', icon: 'Ae', color: '#9999FF', percentage: '85%' },
    { name: 'CapCut', icon: 'C', color: '#FFFFFF', percentage: '90%' },
    { name: 'Typography', icon: 'T', color: '#FFFFFF', percentage: '85%' },
    { name: 'Branding', icon: 'B', color: '#FFFFFF', percentage: '90%' },
  ];

  return (
    <section className="w-full grid lg:grid-cols-3 gap-6">
      {/* Skills */}
      <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6" id="skills">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="text-primary text-2xl">⚡</span> KỸ NĂNG CỦA MÌNH
        </h3>
        
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center font-bold text-xs rounded bg-surface border border-white/10" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </div>
                <span className="text-textMuted">{skill.percentage}</span>
              </div>
              <div className="w-full h-2 bg-surfaceLight rounded-full overflow-hidden shadow-inner border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full shadow-glow relative" 
                  style={{ width: skill.percentage }} 
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full mix-blend-overlay" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-3 rounded-xl border border-white/10 glass-panel flex items-center justify-center gap-2 text-sm font-medium hover:bg-white/5 transition-colors">
          XEM THÊM KỸ NĂNG <ArrowRight size={16} />
        </button>
      </div>

      {/* About */}
      <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6" id="about">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="text-orange-400">👤</span> VỀ MÌNH
        </h3>
        
        <p className="text-sm text-textMuted leading-relaxed">
          Mình là một Graphic Designer với hơn 2 năm kinh nghiệm trong lĩnh vực thiết kế đồ họa. Mình đam mê sáng tạo, yêu thích màu sắc, typography và luôn tìm kiếm những ý tưởng mới để mang đến sản phẩm đẹp và hiệu quả.
        </p>

        <ul className="flex flex-col gap-3 text-sm">
          {[
            'Thiết kế sáng tạo, hiện đại và ấn tượng',
            'Luôn lắng nghe và thấu hiểu nhu cầu khách hàng',
            'Đảm bảo đúng deadline và chất lượng công việc',
            'Sẵn sàng đồng hành cùng dự án của bạn',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
              <span className="text-textMuted">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <h4 className="font-script text-4xl text-gradient opacity-80">Năng Đỗ</h4>
        </div>
      </div>

      {/* Contact */}
      <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6" id="contact">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="text-primary">🚀</span> LIÊN HỆ VỚI MÌNH
        </h3>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-textMuted">Email</p>
              <p className="text-sm font-medium">nangdo.design@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-textMuted">Điện thoại</p>
              <p className="text-sm font-medium">0367 123 456</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-textMuted">Địa chỉ</p>
              <p className="text-sm font-medium">Hà Nội, Việt Nam</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">
              Be
            </div>
            <div>
              <p className="text-xs text-textMuted">Behance</p>
              <p className="text-sm font-medium">behance.net/nangdo</p>
            </div>
          </div>
        </div>

        <button className="mt-auto w-full py-4 rounded-xl bg-gradient-to-r from-orange-400 via-primary to-secondary font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(255,42,133,0.3)]">
          CHAT VỚI MÌNH NGAY <MessageCircle size={18} />
        </button>
      </div>
    </section>
  );
}
