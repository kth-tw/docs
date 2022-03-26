import{d as n}from"./app.9ab352e8.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="uploading-files" tabindex="-1"><a class="header-anchor" href="#uploading-files" aria-hidden="true">#</a> Uploading files</h1><p>This requires to have multer installed:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> multer
<span class="token function">yarn</span> <span class="token function">add</span> -D @types/multer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="using-the-uploadedfile-uploadedfiles-decorator" tabindex="-1"><a class="header-anchor" href="#using-the-uploadedfile-uploadedfiles-decorator" aria-hidden="true">#</a> Using the UploadedFile / UploadedFiles decorator</h2><p>The simplest way to add support for file upload is by adding <code>@UploadedFiles</code> or <code>@UploadedFile</code> as a parameter decorator. This loads multer allowing multipart/form-data submissions to work. <code>@FormField</code> can be used to access other multipart form fields.</p><p>Express example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Post<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> FormField<span class="token punctuation">,</span> UploadedFiles<span class="token punctuation">,</span> UploadedFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tsoa&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Route</span></span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FilesController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">FormField</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">FormField</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">UploadedFiles</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> files<span class="token operator">:</span> Express<span class="token punctuation">.</span>Multer<span class="token punctuation">.</span>File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">UploadedFile</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> file<span class="token operator">:</span> Express<span class="token punctuation">.</span>Multer<span class="token punctuation">.</span>File<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Koa example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Post<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> FormField<span class="token punctuation">,</span> UploadedFiles<span class="token punctuation">,</span> UploadedFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tsoa&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Route</span></span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FilesController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">FormField</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">FormField</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">UploadedFiles</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> files<span class="token operator">:</span> File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token decorator"><span class="token at operator">@</span><span class="token function">UploadedFile</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> file<span class="token operator">:</span> File<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Note, that using the decorator defaults to saving on the disk with a default file location set to the OS&#39;s temp folder.</p><h2 id="custom-multer-upload" tabindex="-1"><a class="header-anchor" href="#custom-multer-upload" aria-hidden="true">#</a> Custom multer upload</h2><p>To customize the multer upload, you have to use multer inside a controller resource.</p><p>To use it with Express, call handleFile and pass the express Request to resolve &#39;file&#39;. This also handles multipart/form-data. A quick sample:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Post<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tsoa&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">&quot;express&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> multer <span class="token keyword">from</span> <span class="token string">&quot;multer&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Route</span></span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FilesController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> request<span class="token operator">:</span> express<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleFile</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// file will be in request.randomFileIsHere, it is a buffer</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token function">handleFile</span><span class="token punctuation">(</span>request<span class="token operator">:</span> express<span class="token punctuation">.</span>Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> multerSingle <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">multerSingle</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>To use it with Koa, pass Koa&#39;s Request context object to resolve &#39;file&#39;. This also handles multipart/form-data. A quick sample:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Post<span class="token punctuation">,</span> Request<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tsoa&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Request <span class="token keyword">as</span> koaRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;koa&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> multer <span class="token keyword">from</span> <span class="token string">&quot;multer&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Route</span></span><span class="token punctuation">(</span><span class="token string">&quot;files&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FilesController</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Request</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> koaRequest<span class="token operator">:</span> Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> multer <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">multer</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> multerSingle <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&quot;randomFileIsHere&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// file will be in request.randomFileIsHere, it is a buffer</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>The according OpenAPI definition can be merge-overwritten inside <code>tsoa.json</code>. Here is a quick sample, what the previous request should look like.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token string-property property">&quot;specMerging&quot;</span><span class="token operator">:</span> <span class="token string">&quot;recursive&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/files/uploadFile&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;post&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;consumes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;multipart/form-data&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;in&quot;</span><span class="token operator">:</span> <span class="token string">&quot;formData&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;randomFileIsHere&quot;</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,18);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
