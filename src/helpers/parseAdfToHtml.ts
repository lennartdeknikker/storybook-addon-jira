import nmd from 'nano-markdown'

// Todo: better formatting would be appreciated
const parseAdfToHtml = (AdfString: string) => {
    
  let preMods = AdfString.replace(/\[([^\]\|]*)\]/igm, "[$1]($1)").replace(/\[([^\]\|]*)\|(.*)\]/igm, "[$1]($2)")
  preMods = preMods.replace(/{code(:.*)?}([\s\S\n]*){code}/igm, "<pre style='border:1px solid;padding:.8rem;'>$2</pre>")
  preMods = preMods.replace(/{noformat}([\s\S\n]*){noformat}/igm, "<pre style='border:1px solid;padding:.8rem;'>$1</pre>")
  preMods = preMods.replace(/h1\./, '#').replace(/h2\./, '##').replace(/h3\./, '###').replace(/h4\./, '####').replace(/h5\./, '#####').replace(/h6\./, '######')
  return nmd(preMods)
}

export default parseAdfToHtml
