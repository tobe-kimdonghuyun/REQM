(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp_ExcelExportImport_Client");
            this.set_titletext("New Form");
            this.getSetter("classname").set("Temp_ExcelImport_Client");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"},{"Column0" : "asd","Column1" : "fas","Column2" : "dfas","Column3" : "dfas"},{"Column0" : "f","Column1" : "asdf","Column2" : "as","Column3" : "df"},{"Column3" : "asdf","Column2" : "as","Column1" : "dfa","Column0" : "sdf"},{"Column0" : "asdf","Column1" : "fas","Column2" : "asd","Column3" : "asdf"},{"Column0" : "asd","Column1" : "dfas","Column2" : "fasd","Column3" : "df"},{"Column0" : "asdf","Column1" : "df","Column2" : "asdf","Column3" : "fas"}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.ExcelImportObject("ExcelImportObject00", this);
            this.addChild(obj.name, obj);


            obj = new nexacro.ExcelExportObject("ExcelExportObject00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","606","20","107","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","0.98%","20",null,"45","87.99%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","606","80","404","240",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("2");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"투비1\"/><Cell col=\"1\" text=\"투비2\"/><Cell col=\"2\" text=\"투비3\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid01","9","98","381","242",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("3");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"Column9\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:Column4\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:Column5\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:Column6\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:Column7\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:Column8\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","3.91%","357",null,"227","44.24%",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","398","89","62","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("0x2c");
            obj.set_text("0x2c");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","470","89","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set separator");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00_00","397","139","63","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("none");
            obj.set_text("none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","470","139","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("set quotechar");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","443","197","137","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","170","25","426","52",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("command=getsheetdata;output=outDs;head=0,0:4,1;body=0,1:2,2;");
            obj.set_text("command=getsheetdata;output=outDs;head=0,0:4,1;body=0,1:2,2;");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_98365_ExcelExportImport_TXT.xfdl", function(nexacro, system, trace) {
        // Import
        this.Button01_onclick = function(obj,  e)
        {
        	var url = "http://172.10.13.64:8080/XExportImport";
        	this.Dataset00.clear();

        	if (this.importObj)
        	{
        		this.importObj.destroy();
        		this.importObj = null;
        	}

        	this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.addChild("Import00",this.importObj);
        	this.importObj.set_importtype(nexacro.ImportTypes.TXT);
        	this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.Import00_onerror, this);

        	// Import separator property
        	this.importObj.set_separator(this.Edit00.value);
        	this.TextArea00.set_value(this.TextArea00.value + "\nimport set separator success [ " + this.importObj.separator + " ]");

        	// Import quotechar property
        	this.importObj.set_quotechar(this.Edit00_00.value);
        	this.TextArea00.set_value(this.TextArea00.value + "\nimport set quotechar success[ " + this.importObj.quotechar + " ]");

        	this.importObj.set_importurl(url);
        	this.importObj.importData("local", this.Edit01.value, "[Dataset00=outDs]");
        }

        // Import onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onsuccess event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.url: " +  e.url);

        	trace(this.Dataset00.saveXML());

        	this.Grid00.createFormat();
        	this.Grid01.createFormat();
        	//this.Grid02.createFormat();
        }

        // Import onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onerror event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errorcode: " +  e.errorcode);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errormsg: " + e.errormsg);
        }

        // Export
        this.Button00_onclick = function(obj,  e)
        {
        	//this.exportObj = new ExcelExportObject();
        	if (this.exportObj)
        	{
        		this.exportObj.destroy();
        		this.exportObj = null;
        	}

        	this.exportObj = new nexacro.ExcelExportObject("Export00",this);
        	this.addChild("Export00",this.exportObj);

        	this.exportObj.addEventHandler("onprogress", this.Export00_onprogress, this);
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);
        	this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);

        	//this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exporttype(nexacro.ExportTypes.TXT);
        	this.exportObj.set_exportfilename("2015125_한글파일");
        	this.exportObj.set_exporturl("http://172.10.12.45:9090/NexacroN_XENI_JAVA_20251024(1.5.11)/XExportImport");

        	this.exportObj.set_exportmessageprocess("%d번째 [ %d / %d ]");
        	this.exportObj.set_exportuitype("exportprogress");
        	this.exportObj.set_exporteventtype("itemrecord");

        	// Export separator property
        	this.exportObj.set_separator(this.Edit00.value);
        	this.TextArea00.set_value(this.TextArea00.value + "\nexport set separator success[ " + this.importObj.separator + " ]");

        	// Export quotechar property
        	this.exportObj.set_quotechar(this.Edit00_00.value);
        	this.TextArea00.set_value(this.TextArea00.value + "\nexport set quotechar success[ " + this.importObj.quotechar + " ]");

        	//this.exportObj._partition_size = parseInt(this.Edit00.value);
        	//this.exportObj.set_exportstyle(this.chk_style.value);

        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!B2");


        	var result = this.exportObj.exportData();
        }

        this.Export00_onprogress = function(obj,e)
        {
        // 	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onprogress event start================");
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid 				:"+e.eventid 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.id 					:"+e.id 					);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject 			:"+e.fromobject 			);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.itemindex 			:"+e.itemindex 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.itemtype 			:"+e.itemtype 				);
        // 	this.TextArea00.set_value(this.TextArea00.value + "\ne.recordindex 			:"+e.recordindex  			);
        }

        this.Export00_onerror = function(obj,e)
        {
        	//this.setWaitCursor(false, true);
        	//trace("Export onerror");
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onerror event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errorcode: " +  e.errorcode);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.errormsg: " + e.errormsg);
        }

        this.Export00_onsuccess = function(obj,e)
        {
        	//trace("Export onsuccess");
        	this.TextArea00.set_value(this.TextArea00.value + "\n=========== onsuccess event start============");
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.eventid: " + e.eventid);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromobject: " + e.fromobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.fromreferenceobject: " + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\ne.url: " +  e.url);
        }


        this.Temp_ExcelExportImport_Client_onload = function(obj,e)
        {
        	//this.importObj = new nexacro.ExcelImportObject("Import00",this);
        	this.importObj = new ExcelImportObject();
        	this.exportObj = new ExcelExportObject();
        };

        // separator property
        this.Button02_onclick = function(obj,e)
        {
        	if (!this.TextArea00.value)
        		this.TextArea00.set_value("");
        	if (this.importObj)
        	{
        		this.importObj.set_separator(this.Edit00.value);
        		this.TextArea00.set_value(this.TextArea00.value + "\nimport set separator success [ " + this.importObj.separator + " ]");
        	}
        	else
        	{
        		this.TextArea00.set_value(this.TextArea00.value + "\nimport set separator fail");
        	}

        	if (this.exportObj)
        	{
        		this.exportObj.set_separator(this.Edit00.value);
        		this.TextArea00.set_value(this.TextArea00.value + "\nexport set separator success[ " + this.exportObj.separator + " ]");
        	}
        	else
        	{
        		this.TextArea00.set_value(this.TextArea00.value + "\nexport set separator fail");
        	}
        };

        // quotechar property
        this.Button02_00_onclick = function(obj,e)
        {
        	if (!this.TextArea00.value)
        		this.TextArea00.set_value("");
        	if (this.importObj)
        	{
        		this.importObj.set_quotechar(this.Edit00_00.value);
        		this.TextArea00.set_value(this.TextArea00.value + "\nimport set quotechar success[ " + this.importObj.quotechar + " ]");
        	}
        	else
        	{
        		this.TextArea00.set_value(this.TextArea00.value + "\nimport set quotechar fail");
        	}

        	if (this.exportObj)
        	{
        		this.exportObj.set_quotechar(this.Edit00_00.value);
        		this.TextArea00.set_value(this.TextArea00.value + "\nexport set quotechar success[ " + this.importObj.quotechar + " ]");
        	}
        	else
        	{
        		this.TextArea00.set_value(this.TextArea00.value + "\nexport set quotechar fail");
        	}
        };


        this.Button03_onclick = function(obj,e)
        {
        	trace("importObj.quotechar: "+ this.importObj.quotechar);
        	trace("importObj.separator: "+ this.importObj.separator);
        	trace("exportObj.quotechar: "+ this.exportObj.quotechar);
        	trace("exportObj.separator: "+ this.exportObj.separator);


        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Temp_ExcelExportImport_Client_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("RP_98365_ExcelExportImport_TXT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
