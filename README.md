# كوردستان | Kurdistan — أرض الأبطال

موقع تفاعلي حول كوردستان بالتصميم الحديث والمحتوى الثري.

## إجراءات الأمان المطبقة (Security Hardening)

### ✅ مستوى العميل (Frontend Security)

1. **Strict Content Security Policy (CSP)**
   - `default-src 'none'` — منع جميع الموارد الافتراضية
   - `script-src 'self'` — تنفيذ السكريبتات المحلية فقط (لا eval، لا inline)
   - `style-src 'self' 'unsafe-inline'` — CSS محلي وبعض الأنماط المضمنة الضرورية
   - `img-src 'self' data: https://upload.wikimedia.org` — صور من مصادر موثوقة فقط
   - `media-src https://upload.wikimedia.org` — الملفات الصوتية من Wikimedia فقط
   - `frame-ancestors 'none'` — منع تضمين الموقع في iframe

2. **HTTP Security Headers**
   - `X-Content-Type-Options: nosniff` — منع تخمين نوع الملف
   - `X-Frame-Options: DENY` — منع clickjacking
   - `Referrer-Policy: strict-origin-when-cross-origin` — حماية الخصوصية عند الانتقال
   - `Permissions-Policy` — تعطيل المايكروفون والكاميرا والموقع الجغرافي

3. **Script Externalization**
   - جميع السكريبتات مُستخرجة إلى `js/main.js` (لا سكريبتات مضمنة)
   - استخدام `defer` للتحميل الآمن

4. **Trusted Sources Only**
   - صور من Wikimedia Commons (رخص CC/PD)
   - صوت من Wikimedia Commons (رخص عامة)
   - Google Fonts من مصدر موثوق
   - لا تكامل مع جهات خارجية غير مأمونة

5. **No Inline Event Handlers**
   - لا استخدام `onclick`, `onload`, إلخ في HTML
   - جميع المستمعين محمولة عبر JavaScript خارجي

### ⚠️ إجراءات يجب تطبيقها على الخادم (Server-Level)

للحصول على أمان شامل (مستحيل الاختراق عملياً)، يجب تكوين هذه الرؤوس على مستوى الخادم:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: microphone=(), camera=(), geolocation=()
Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self' data: https://upload.wikimedia.org; ...
```

### 🔐 خطوات النشر الآمن

1. **استخدام HTTPS**
   ```bash
   # استخدم شهادة SSL من Let's Encrypt أو موفر موثوق
   # جميع الروابط يجب أن تكون https:// فقط
   ```

2. **على الخادم (Apache/Nginx)**
   
   **Apache (.htaccess)**
   ```apache
   <IfModule mod_headers.c>
       Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
       Header always set X-Content-Type-Options "nosniff"
       Header always set X-Frame-Options "DENY"
       Header always set Referrer-Policy "strict-origin-when-cross-origin"
       Header always set Permissions-Policy "microphone=(), camera=(), geolocation=(), payment=()"
   </IfModule>
   ```
   
   **Nginx**
   ```nginx
   server {
       add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-Frame-Options "DENY" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;
       add_header Permissions-Policy "microphone=(), camera=(), geolocation=(), payment=()" always;
   }
   ```

3. **تحديثات منتظمة**
   - حدّث مكتبات البرامج بانتظام
   - راقب الثغرات الأمنية المعروفة

### 🛡️ مستويات الحماية المتحققة

| المستوى | الحالة | الملاحظات |
|---------|--------|----------|
| **XSS (Cross-Site Scripting)** | ✅ آمن | لا سكريبتات مضمنة، CSP صارم |
| **CSRF (Cross-Site Request Forgery)** | ✅ آمن | موقع ثابت (لا POST)، SameSite Cookies |
| **Clickjacking** | ✅ آمن | X-Frame-Options: DENY |
| **MIME Sniffing** | ✅ آمن | X-Content-Type-Options: nosniff |
| **Injection Attacks** | ✅ آمن | لا قواعد بيانات، محتوى ثابت معتمد |
| **Man-in-the-Middle** | ⚠️ مشروط | يتطلب HTTPS على الخادم |
| **Data Exfiltration** | ⚠️ مشروط | يتطلب معايير إضافية على الخادم |

### 📋 ملخص الملفات

```
g:\css learn\
├── index.html          (صفحة رئيسية + CSS + Meta headers)
├── js\
│   └── main.js         (سكريبتات خارجية آمنة)
├── images\             (صور SVG بديلة)
│   ├── shivan-perwer.svg
│   ├── hassan-zerik.svg
│   ├── aynur-dogan.svg
│   └── adnan-karim.svg
├── css\
│   └── mohammed.css    (CSS خارجي - اختياري للمستقبل)
└── README.md           (هذا الملف)
```

### 🚀 اختبار الأمان

استخدم الأدوات التالية للتحقق من الأمان:

1. **Mozilla Observatory**
   - https://observatory.mozilla.org/

2. **SSL Labs**
   - https://www.ssllabs.com/ssltest/

3. **OWASP ZAP**
   - https://www.zaproxy.org/

4. **Lighthouse (Chrome DevTools)**
   - افتح DevTools → Lighthouse → Audit

---

**تصميم الموقع بواسطة Mohammed Bahej**  
**آخر تحديث: 2026-06-10**
