const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const chromePath = '/Users/chinmaybhatt/.cache/puppeteer/chrome-headless-shell/mac_arm-154.0.8037.57/chrome-headless-shell-mac-arm64/chrome-headless-shell';
const outputDir = path.join(__dirname, 'Raw/Iman Gadzhi - News Propaganda/broll');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const cards = [
  {
    name: 'card1_breaking_news.png',
    html: `
      <div style="width:1080px;height:960px;background:radial-gradient(circle at 50% 40%, #1f0a0a 0%, #08080c 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:40px;left:60px;display:flex;align-items:center;gap:12px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.4);padding:8px 20px;border-radius:100px;">
          <div style="width:12px;height:12px;border-radius:50%;background:#ef4444;box-shadow:0 0 12px #ef4444;"></div>
          <span style="font-size:20px;font-weight:800;letter-spacing:2px;color:#fca5a5;">BREAKING NEWS CYCLE</span>
        </div>
        
        <div style="margin-top:40px;text-align:center;">
          <h2 style="font-size:36px;font-weight:700;color:#9ca3af;letter-spacing:1px;margin:0 0 16px 0;">THE ULTIMATE DISTRACTION</h2>
          <h1 style="font-size:76px;font-weight:900;line-height:1.05;margin:0;letter-spacing:-1px;text-transform:uppercase;">
            IF YOU WANT TO<br/>
            <span style="color:#ef4444;text-shadow:0 0 30px rgba(239,68,68,0.5);">STAY POOR</span>
          </h1>
        </div>

        <div style="margin-top:48px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:32px 48px;display:flex;align-items:center;gap:24px;max-width:800px;">
          <div style="font-size:54px;">📺</div>
          <div>
            <div style="font-size:26px;font-weight:700;color:#f3f4f6;">Keep Watching The 24/7 News</div>
            <div style="font-size:18px;color:#9ca3af;margin-top:4px;">Manufactured outrage designed to keep you paralyzed</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'card2_propaganda.png',
    html: `
      <div style="width:1080px;height:960px;background:radial-gradient(circle at 50% 30%, #0d1527 0%, #07090e 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:40px;left:60px;display:flex;align-items:center;gap:12px;background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.4);padding:8px 20px;border-radius:100px;">
          <span style="font-size:20px;font-weight:800;letter-spacing:2px;color:#38bdf8;">SYSTEM ARCHITECTURE</span>
        </div>

        <div style="text-align:center;margin-top:20px;">
          <div style="font-size:28px;font-weight:700;color:#94a3b8;letter-spacing:3px;">THE MACHINE</div>
          <h1 style="font-size:72px;font-weight:900;margin:8px 0 0 0;text-transform:uppercase;">
            NEWS = <span style="color:#facc15;text-shadow:0 0 30px rgba(250,204,21,0.4);">PROPAGANDA</span>
          </h1>
        </div>

        <!-- 3 Stage Loop -->
        <div style="margin-top:40px;display:flex;align-items:center;gap:16px;width:100%;max-width:920px;justify-content:center;">
          <div style="background:#111827;border:1px solid #1f2937;border-radius:20px;padding:24px;text-align:center;flex:1;">
            <div style="font-size:36px;">📰</div>
            <div style="font-size:20px;font-weight:800;margin-top:8px;">HEADLINE</div>
            <div style="font-size:14px;color:#94a3b8;margin-top:4px;">Engineered conflict</div>
          </div>
          <div style="font-size:28px;color:#64748b;">➔</div>
          <div style="background:#1e1b4b;border:1px solid #4338ca;border-radius:20px;padding:24px;text-align:center;flex:1;">
            <div style="font-size:36px;">🗣️</div>
            <div style="font-size:20px;font-weight:800;color:#a5b4fc;margin-top:8px;">ARGUE</div>
            <div style="font-size:14px;color:#cbd5e1;margin-top:4px;">Same old debate</div>
          </div>
          <div style="font-size:28px;color:#64748b;">➔</div>
          <div style="background:#311010;border:1px solid #991b1b;border-radius:20px;padding:24px;text-align:center;flex:1;">
            <div style="font-size:36px;">📉</div>
            <div style="font-size:20px;font-weight:800;color:#fca5a5;margin-top:8px;">ZERO WEALTH</div>
            <div style="font-size:14px;color:#fecaca;margin-top:4px;">Zero progress</div>
          </div>
        </div>

        <div style="margin-top:40px;font-size:22px;color:#e2e8f0;font-weight:600;background:rgba(0,0,0,0.6);padding:12px 30px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
          "Simply there to keep you arguing about the same old sh*t"
        </div>
      </div>
    `
  },
  {
    name: 'card3_qatar_laws.png',
    html: `
      <div style="width:1080px;height:960px;background:#090d16;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;">
        <div style="width:100%;max-width:880px;background:#161b22;border:1px solid #30363d;border-radius:24px;padding:40px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.7);">
          <div style="display:flex;align-items:center;justify-content:between;margin-bottom:20px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div style="width:56px;height:56px;border-radius:50%;background:#1d9bf0;display:flex;align-items:center;justify-content:center;font-size:28px;">𝕏</div>
              <div>
                <div style="font-size:22px;font-weight:800;">Global Outrage Daily <span style="color:#1d9bf0;">✓</span></div>
                <div style="font-size:16px;color:#8b949e;">@GeopoliticsViral</div>
              </div>
            </div>
            <div style="background:rgba(239,68,68,0.2);color:#ef4444;font-size:14px;font-weight:800;padding:6px 14px;border-radius:100px;border:1px solid rgba(239,68,68,0.4);margin-left:auto;">
              DISTRACTION PRIORITY #1
            </div>
          </div>

          <div style="font-size:28px;line-height:1.4;color:#f0f6fc;font-weight:500;margin:24px 0;">
            "Breaking: Debate explodes over Qatar's cultural laws ahead of international events. Millions argue online for hours..."
          </div>

          <div style="display:flex;gap:36px;padding-top:20px;border-top:1px solid #21262d;font-size:18px;color:#8b949e;font-weight:600;">
            <span>💬 48.2K Comments</span>
            <span>🔁 124K Retweets</span>
            <span>❤️ 389K Likes</span>
          </div>
        </div>

        <div style="margin-top:36px;font-size:26px;font-weight:800;color:#facc15;background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.3);padding:14px 32px;border-radius:16px;">
          Why do you care about Qatar and their laws?
        </div>
      </div>
    `
  },
  {
    name: 'card4_mother_retire.png',
    html: `
      <div style="width:1080px;height:960px;background:radial-gradient(circle at 50% 30%, #1e130b 0%, #09090b 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;">
        <div style="background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.4);padding:8px 24px;border-radius:100px;font-size:20px;font-weight:800;letter-spacing:2px;color:#fbbf24;margin-bottom:24px;">
          ⚠️ THE UNCOMFORTABLE TRUTH
        </div>

        <h1 style="font-size:68px;font-weight:900;text-align:center;margin:0;line-height:1.1;text-transform:uppercase;">
          YOUR MOTHER<br/>
          <span style="color:#38bdf8;">STILL WORKS</span>
        </h1>
        
        <div style="font-size:26px;color:#fca5a5;font-weight:700;margin-top:16px;background:rgba(239,68,68,0.15);padding:8px 20px;border-radius:10px;">
          She is NOT retired yet.
        </div>

        <div style="margin-top:40px;background:#18181b;border:1px solid #27272a;border-radius:24px;padding:36px 50px;width:100%;max-width:820px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:20px;">
            <div style="font-size:48px;">⏳</div>
            <div>
              <div style="font-size:22px;font-weight:800;color:#f3f4f6;">Her Remaining Decades</div>
              <div style="font-size:16px;color:#a1a1aa;margin-top:4px;">She should be resting and enjoying life.</div>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:14px;color:#ef4444;font-weight:800;letter-spacing:1px;text-transform:uppercase;">Status</div>
            <div style="font-size:24px;font-weight:900;color:#fca5a5;">Still Punching In</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'card5_angry_tweets.png',
    html: `
      <div style="width:1080px;height:960px;background:#090d16;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;">
        <div style="text-align:center;margin-bottom:30px;">
          <div style="font-size:20px;font-weight:800;color:#ef4444;letter-spacing:2px;text-transform:uppercase;">Priorities Inverted</div>
          <h1 style="font-size:62px;font-weight:900;margin:6px 0 0 0;">
            WRITING STUPID TWEETS
          </h1>
        </div>

        <div style="width:100%;max-width:840px;background:#111827;border:2px dashed #374151;border-radius:20px;padding:36px;display:flex;flex-direction:column;gap:20px;">
          <div style="display:flex;gap:16px;align-items:center;">
            <div style="width:48px;height:48px;border-radius:50%;background:#374151;display:flex;align-items:center;justify-content:center;font-size:22px;">✍️</div>
            <div style="font-size:22px;color:#93c5fd;font-style:italic;">
              "Drafting 14-tweet geopolitical analysis on foreign policy..."
            </div>
          </div>
          
          <div style="height:1px;background:#1f2937;"></div>

          <div style="display:flex;justify-content:space-between;align-items:center;font-size:18px;">
            <span style="color:#f87171;font-weight:700;">❌ Cost: Hours of Focus Lost</span>
            <span style="color:#f87171;font-weight:700;">❌ Money Earned: $0.00</span>
          </div>
        </div>

        <div style="margin-top:36px;font-size:28px;font-weight:900;color:#ef4444;text-transform:uppercase;letter-spacing:1px;">
          SHUT THE F*CK UP. SHAME ON YOU.
        </div>
      </div>
    `
  },
  {
    name: 'card6_wake_up_king.png',
    html: `
      <div style="width:1080px;height:960px;background:radial-gradient(circle at 50% 35%, #052e16 0%, #030712 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#fff;box-sizing:border-box;padding:60px;position:relative;">
        <div style="font-size:72px;margin-bottom:8px;filter:drop-shadow(0 0 20px #eab308);">👑</div>
        <h1 style="font-size:76px;font-weight:900;text-transform:uppercase;margin:0;letter-spacing:1px;color:#facc15;text-shadow:0 0 40px rgba(250,204,21,0.5);">
          WAKE UP, KING
        </h1>
        <div style="font-size:26px;color:#86efac;font-weight:800;letter-spacing:2px;margin-top:10px;">
          YOU HAVE REAL WORK TO DO
        </div>

        <div style="margin-top:40px;width:100%;max-width:760px;background:rgba(0,0,0,0.5);border:1px solid rgba(34,197,94,0.3);border-radius:24px;padding:32px 40px;display:flex;flex-direction:column;gap:18px;">
          <div style="display:flex;align-items:center;gap:16px;font-size:22px;color:#94a3b8;text-decoration:line-through;">
            <span style="color:#ef4444;font-size:26px;">✕</span> 24/7 News & Outrage Feeds
          </div>
          <div style="display:flex;align-items:center;gap:16px;font-size:22px;color:#f0fdf4;font-weight:700;">
            <span style="color:#22c55e;font-size:26px;">✓</span> Build Real Skills & Cashflow
          </div>
          <div style="display:flex;align-items:center;gap:16px;font-size:22px;color:#f0fdf4;font-weight:700;">
            <span style="color:#22c55e;font-size:26px;">✓</span> Retire Your Mother
          </div>
        </div>
      </div>
    `
  }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 960 });

  for (const card of cards) {
    await page.setContent(card.html);
    const target = path.join(outputDir, card.name);
    await page.screenshot({ path: target });
    console.log('Saved:', target);
  }

  await browser.close();
  console.log('All B-roll cards rendered successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

