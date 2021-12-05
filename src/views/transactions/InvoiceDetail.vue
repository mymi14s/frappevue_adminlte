<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>{{data ? data.name : 'Invoice'}}</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Invoice</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="callout callout-info">
                <h5><i class="fas fa-info"></i> Note:</h5>
                This page has been enhanced for printing. Click the print button at the bottom of the invoice to test.
              </div>


              <!-- Main content -->
              <div class="invoice p-3 mb-3">
                <!-- title row -->
                <div class="row">
                  <div class="col-12">
                    <h4>
                      <i class="fas fa-globe"></i> AdminLTE, Inc.
                      <small class="float-right">Date: {{data.created}}</small>
                    </h4>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- info row -->
                <div class="row invoice-info">
                  <div class="col-sm-4 invoice-col">
                    From
                    <address>
                      <strong>Admin, Inc.</strong><br>
                      795 Folsom Ave, Suite 600<br>
                      San Francisco, CA 94107<br>
                      Phone: (804) 123-5432<br>
                      Email: info@almasaeedstudio.com
                    </address>
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 invoice-col">
                    To
                    <address>
                      <strong>{{data.customer_name}}</strong><br>
                      795 Folsom Ave, Suite 600<br>
                      San Francisco, CA 94107<br>
                      Phone: (555) 539-1037<br>
                      Email: john.doe@example.com
                    </address>
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 invoice-col">
                    <b>Invoice: {{data.name}}</b><br>
                    <br>
                    <!-- <b>Order ID:</b> {{data.name}}<br> -->
                    <b>Payment Due:</b> {{data.due_date}}<br>
                    <!-- <b>Account:</b> 968-34567 -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <!-- Table row -->
                <div class="row">
                  <div class="col-12 table-responsive">
                    <table class="table table-striped">
                      <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>QTY</th>
                        <th>Rate</th>
                        <th>Amount</th>
                        <!-- <th>Subtotal</th> -->
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="d in data.items">
                        <td>{{d.item_name}}</td>
                        <td>{{d.qty}}</td>
                        <td>{{$formatCurrency(d.rate, data.currency)}}</td>
                        <td>{{$formatCurrency(d.amount, data.currency)}}</td>
                        <!-- <td>$64.50</td> -->
                      </tr>

                      </tbody>
                    </table>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <div class="row">
                  <!-- accepted payments column -->
                  <div class="col-6">
                    <p class="lead">Payment Methods:</p>
                    <img src="/static/dist/img/credit/visa.png" alt="Visa">
                    <img src="/static/dist/img/credit/mastercard.png" alt="Mastercard">
                    <img src="/static/dist/img/credit/american-express.png" alt="American Express">
                    <img src="/static/dist/img/credit/paypal2.png" alt="Paypal">

                    <p class="text-muted well well-sm shadow-none" style="margin-top: 10px;">
                      Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem
                      plugg
                      dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p>
                  </div>
                  <!-- /.col -->
                  <div class="col-6">
                    <p class="lead">Amount Due {{data.due_date}}</p>

                    <div class="table-responsive">
                      <table class="table">
                        <tr>
                          <th style="width:50%">Subtotal:</th>
                          <td>{{data.grand_total ? $formatCurrency(data.total, data.currency) : ''}}</td>
                        </tr>
                        <!-- <tr>
                          <th>Tax (9.3%)</th>
                          <td>$10.34</td>
                        </tr>
                        <tr>
                          <th>Shipping:</th>
                          <td>$5.80</td>
                        </tr> -->
                        <tr>
                          <th>Grand Total:</th>
                          <td>{{data.grand_total ? $formatCurrency(data.grand_total, data.currency) : ''}}</td>
                        </tr>
                        <tr>
                          <th>In Words:</th>
                          <td>{{data.in_words}}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <!-- this row will not appear when printing -->
                <div class="row no-print">
                  <div class="col-12">
                    <a href="invoice-print.html" rel="noopener" target="_blank" class="btn btn-default"><i class="fas fa-print"></i> Print</a>
                    <button type="button" class="btn btn-success float-right"><i class="far fa-credit-card"></i> Submit
                      Payment
                    </button>
                    <button @click="getPDF" type="button" class="btn btn-primary float-right" style="margin-right: 5px;">
                      <i class="fas fa-download"></i> Generate PDF
                    </button>
                  </div>
                </div>
              </div>
              <!-- /.invoice -->
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>

</template>



<script>

    export default {
        'name': 'InvoiceDetail',
        data(){
            return {
                title: '',
                data: {}

            }
        },
        methods: {
            async getData(){
                // $('#transactions-table').DataTable().destroy();
                let res = await this.$frappe.get_doc('Sales Invoice', this.$route.params.name);
                console.log(res)
                if(res.status_code==200){
                    this.data = res.data;
                } else {
                    this.$popIt.error('Error!', res.text);
                }
            },
            getPDF(){
                this.$frappe.getPDF('Sales Invoice', this.$route.params.name)
            }
        },
        mounted(){
            // alert(this.$route.params.name)
            // // if(this.)
            // if(!['/login', '/register', '/signup'].includes(this.$route.path)){
            //     this.user = this.$sessionUserData();
            // }
            setTimeout(()=>{
                this.getData();
            }, 2000);
        },
        components: {

        },
        watch: {
            data: {
                handler(data){

                },
                deep: true
            }
        }
    }
</script>
