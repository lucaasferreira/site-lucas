import { test } from "node:test";
import assert from "node:assert/strict";
import { projects } from "./projects";

const SLUGS = [
  "infotech","ritmove","app-nutriconsultora","crm-totalfitt","atriade-pagamentos",
  "app-alvo-consorcios","descontai","cartao-pre-natal","nutri-compare-pro","totalfitt",
];

test("tem exatamente 10 projetos", () => {
  assert.equal(projects.length, 10);
});
test("slugs corretos e únicos", () => {
  const s = projects.map((p) => p.slug);
  assert.deepEqual(new Set(s).size, 10);
  for (const slug of SLUGS) assert.ok(s.includes(slug), `faltou ${slug}`);
});
test("campos obrigatórios não-vazios", () => {
  for (const p of projects) {
    for (const f of ["title","tagline","type","problem","solution","cover"] as const) {
      assert.ok(p[f] && p[f].length > 0, `${p.slug}.${f} vazio`);
    }
    assert.ok(p.techHighlights.length >= 3, `${p.slug} poucos techHighlights`);
    assert.ok(p.technologies.length >= 3, `${p.slug} poucas technologies`);
    assert.ok(p.cover.startsWith("/projects/"), `${p.slug} cover path inválido`);
  }
});
test("liveUrl, quando presente, é http(s)", () => {
  for (const p of projects) {
    if (p.liveUrl) assert.match(p.liveUrl, /^https?:\/\//, `${p.slug} liveUrl`);
  }
});
